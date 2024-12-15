const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const bcrypt = require("bcryptjs");
const dotenv = require('dotenv');
const stripe = require('stripe');
const cookieParser = require("cookie-parser");

dotenv.config();

const auth = require("./Middleware/auth");


require("./db/conn");
const Users = require("./models/registers");

const { log } = require("console");

// Define paths for static files and HTML files
const static_path = path.join(__dirname, "../public");
const html_path = path.join(__dirname, "../public/html");

// Serve static files
app.use(express.static(static_path));
app.use(express.static(html_path));


app.use(cookieParser());
// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(html_path, "home.html"));
});

app.get("/logout",auth,async (req, res) => {
    try {
    console.log(req.user);

    //logout from all devices
    req.user.tokens = [];
    res.clearCookie("jwt");
    await req.user.save();

    res.sendFile(path.join(html_path, "home.html"));

    } catch (error) {
        res.status(401).send(error);
    }    
});
  

app.get("/register.html", (req, res) => {
  res.sendFile(path.join(html_path, "register.html"));
});

app.get("/indoorPlant.html", (req, res) => {
  res.sendFile(path.join(html_path, "indoorPlant.html"));
});
app.get("/outdoor.html", (req, res) => {
  res.sendFile(path.join(html_path, "outdoor.html"));
});
app.get("/flowerPlants.html", (req, res) => {
  res.sendFile(path.join(html_path, "flowerPlants.html"));
});
app.get("/ceramicPots.html", (req, res) => {
  res.sendFile(path.join(html_path, "ceramicPots.html"));
});
app.get("/addToCart.html",auth, (req, res) => {
   res.sendFile(path.join(html_path, "addToCart.html"));
});

app.get("/aboutus.html", (req, res) => {
  res.sendFile(path.join(html_path, "aboutus.html"));
});
app.get("/login.html", (req, res) => {
  res.sendFile(path.join(html_path, "login.html"));
});

//routes for payement gateway success or failed
app.get("/success.html", (req, res) => {
  res.sendFile(path.join(html_path, "success.html"));
});
app.get("/failed.html", (req, res) => {
  res.sendFile(path.join(html_path, "failed.html"));
});


app.post("/register.html", async (req, res) => {
    try {
      const password = req.body.password;
      const cpassword = req.body.confirmpassword;
      const email = req.body.email;
      const contact = req.body.contact;
  
      // Check if password and confirm password match
      if (password !== cpassword) {
        return res.send(`
          <script>
            alert('Passwords do not match!');
            window.history.back();
          </script>
        `);
      }
  
      // Check if the email already exists
      const existingEmail = await Users.findOne({ email: email });
      if (existingEmail) {
        return res.send(`
          <script>
            alert('Email already exists!');
            window.history.back();
          </script>
        `);
      }
  
      // Check if the contact already exists
      const existingContact = await Users.findOne({ contact: contact });
      if (existingContact) {
        return res.send(`
          <script>
            alert('Contact number already exists!');
            window.history.back();
          </script>
        `);
      }
  
      // Create a new user
      const userData = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        contact: contact,
        email: email,
        password: password,
        confirmpassword: cpassword,
      });
  
      // Generate authentication token
      const token = await userData.getTokenForAuth();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 50000),
        httpOnly: true,
      });
  
      // Save the user to the database
      await userData.save();
      res.status(500).send(`
        <script>
          alert('Registration Successfull !.');
          window.location.href = '/login.html';
        </script>
      `)
    } catch (e) {
      res.status(500).send(`
        <script>
          alert('An error occurred during registration.');
          window.history.back();
        </script>
      `);
    }
  });
  

app.post("/login.html", async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      const userEmail = await Users.findOne({ email: email });
  
      if (!userEmail) {
        return res.status(400).send(`
          <script>
            alert('Invalid Credentials');
            window.location.href = '/login.html';
          </script>
        `);
      }
  
      const isMatch = await bcrypt.compare(password, userEmail.password);
  
      if (!isMatch) {
        return res.status(400).send(`
          <script>
            alert('Invalid Credentials');
            window.location.href = '/login.html';
          </script>
        `);
      }
  
      const token = await userEmail.getTokenForAuth();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 500000),
        httpOnly: true,
      });
      res.send(`
        <script>
          const userDetails = {
            firstname: '${userEmail.firstname}'
          };
          localStorage.setItem('userDetails', JSON.stringify(userDetails));
          window.location.href = '/';
        </script>
      `);
    } catch (error) {
      res.status(500).send(`
        <script>
          alert('Something went wrong!');
          window.location.href = '/login.html';
        </script>
      `);
    }
  });

//-------------------  ** stripe payment gateway ** ---------------------
let stripeGateway = stripe(process.env.stripe_api);
let DOMAIN = process.env.DOMAIN;

app.post('/stripe-checkout', async (req, res) => {
  try {
    // Create line items for Stripe
    const lineItems = req.body.items.map(item => {
      return {
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.proName,
            images: [item.image], // URL of the product image
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects the amount in cents/paise
        },
        quantity: item.quantity,
      };
    });

    // Create a Stripe checkout session
    const session = await stripeGateway.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${DOMAIN}/success.html`, // Redirect here on success
      cancel_url: `${DOMAIN}/failed.html`, // Redirect here if payment is canceled
      billing_address_collection: 'required', // Ask for address during checkout
    });

    // Return the URL of the Stripe checkout page
    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ error: 'An error occurred during checkout.' });
  }
});

// admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(html_path, "admin.html"));
});
// Add this route to fetch all users
app.get("/users", async (req, res) => {
  try {
      const users = await Users.find({}, { password: 0, confirmpassword: 0, tokens: 0 }); // Exclude sensitive fields
      const userCount = await Users.countDocuments(); // Count total number of users
      res.json({ users, userCount });
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
