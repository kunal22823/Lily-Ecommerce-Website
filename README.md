
# **Lily - E-Commerce Website of Plants**

Lily - E-Commerce Website of Plants is an online platform designed to promote plant sales and provide users with an engaging and seamless shopping experience. The website offers a wide variety of plants, complete with detailed descriptions and images to help customers make informed decisions.

## **How to Run the Project**

1. **Clone the Repository**  
   Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/kunal22823/Lily-Ecommerce-Website.git
   ```

2. **Navigate to the Backend Directory**  
   Move into the root directory:

3. **Install Dependencies**  
   Install all the required dependencies for the project using npm:
   ```bash
   npm install
   ```

4. **Set Up MongoDB Connection**  
   - Make sure you have MongoDB installed and running on your system. Alternatively, you can use MongoDB Atlas (a cloud database).  
   - Update the `MONGO_URI` in your environment configuration file (`.env`) to point to your MongoDB database. Example:  
     ```
     MONGO_URI=mongodb://localhost:27017/plantdb
     ```
     Or for MongoDB Atlas:
     ```
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/plantdb
     ```

5. **Run the Server**  
   Start the development server:
   ```bash
   npm run dev
   ```

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## **Technologies Used**

This project is built using the following technologies:
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Package Manager**: npm  

## **Key Features**
- User-friendly interface for browsing plants with detailed descriptions and images.
- Secure and scalable backend for managing plant data and user transactions.
- Integration with MongoDB for storing and retrieving data.

## **Important Notes**
- Ensure that Node.js and npm are installed on your system.
- You can test the API endpoints using tools like Postman or directly from the frontend interface.

## **Contributors**

This project is developed by **Kunal Shinde**. For any queries or suggestions, feel free to contact at **krshinde0794@gmail.com**.
