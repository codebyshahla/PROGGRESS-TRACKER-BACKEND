const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
    {
       username:{
        type:"string",
        required:true
       },
       email:{
        type:"string",
        required:true
       },
       mobileNumber:{
        type:"number",
        required:true
       },
       password:{
        type:"string",
        required:true
       },
       confirmPassword:{
        type:"string",
        required:true
       }

    }
);
const usrerModel = new mongoose.model("userData", UserSchema);
module.exports = usrerModel;