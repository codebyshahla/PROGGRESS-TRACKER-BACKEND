/* eslint-disable new-cap */
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      mobileNumber: {
        type: Number,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
);
const userModel = new mongoose.model('usercollection', UserSchema);
module.exports = userModel;
