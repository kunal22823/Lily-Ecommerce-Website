const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/LilyRegistration").then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("Connection Unsuccessfull");
});
