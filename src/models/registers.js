const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt  = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    firstname :{
        type:String,
        required:true
    },
    lastname :{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    },
    tokens:[{
        token:{
            type:String,
            required:true, 
        }
    }]
});

//middleware for creating token for autherization
userSchema.methods.getTokenForAuth = async function() {
    try {
        const token = jwt.sign({_id:this._id.toString()},"lilybelievethatplantsgrowpeoples");
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
        
    }
}


//middleware for hashing the password using bcrypt
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
      this.password = await bcrypt.hash(this.password,10);
      this.confirmpassword = await bcrypt.hash(this.password,10);
    }
    next();
  });


const Users = new mongoose.model("User",userSchema);
module.exports = Users;