const userModel = require("../model/Userschema");
const bcrypt = require('bcrypt')
const object = {
  postSignup: async (req, res) => {
    try{
    console.log(req.body.formData)
    const { username, email, mobileNumber, password } =req.body.formData;
    const existingUser = await userModel.findOne({email : email})

    if (existingUser) {
        res.status(400).json({ error : "user already exist. please login "})
    }
    else{
         const hashedPassword = await bcrypt.hash(password,10)
         console.log(hashedPassword)
         const  user =  new userModel({
          username : username,
          email:email,
          mobileNumber:mobileNumber,
          password:password

        })
        await user.save()
        console.log(req.body, "from body");
        res.status(200).json({ message: "data saved successfully" });
    }


    }catch{

    }
  },
};

module.exports = object;
