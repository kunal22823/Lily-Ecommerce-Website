const jwt = require("jsonwebtoken");
const Users = require("../models/registers");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    // Check if the token exists
    if (!token) {
      return res.status(401).send(`
        <script>
        window.location.href = '/';
      </script>`);
    }

    // Verify the token
    const authUser = jwt.verify(token, "lilybelievethatplantsgrowpeoples");

    // Find the user in the database
    const user = await Users.findOne({ _id: authUser._id });
    if (!user) {
      throw new Error('User not found');
    }

    // Attach user and token to the request object
    req.token = token;
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = auth;
