const { default: mongoose } = require("mongoose");


function config() {
  mongoose
    .connect(
      process.env.MONGO_URL
    )
    .then(() => {
      console.log("connected ");
    }).catch((err)=>{
      console.log("not connected",err);
    })
}

module.exports = config;