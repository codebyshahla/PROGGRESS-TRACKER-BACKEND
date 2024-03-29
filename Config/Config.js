/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
const {default: mongoose} = require("mongoose");


function config() {
  mongoose
    .connect(
      process.env.MONGO_URL
    )
    .then(() => {
      console.log(" mongodb connected successfully ");
    }).catch((err)=>{
      console.log(" mongodb not connected ",err);
    })
}

module.exports = config;