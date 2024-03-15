/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable new-cap */
const express = require("express");
const router = express.Router();
const webpush = require('web-push');

const {
  postSignup,
  postLogin,
  postforgotPassword,
  postVerifyOtp,
  postPersonalDietPlan,
  postTimeManagent,
  postHabit,
  getRole,
} = require("../Controllers/CommonControllers");
const jwtToken = require("../Middleware/Jwt");
const publicKey = "BHLdUuWmZpRK-E5sPjvRsiEVhmApOLt36UKhkAh2JYHwaB5AFDmarXKEQXIvb465IWvLBNiL0zbfJvV8LLltQcU";
const privateKey = "m4EWGueRyLyOh0-1T_RPMcTv9gnksd2TNFzSAMCTQH0";

router.post("/signup", postSignup);
router.post("/login", postLogin);


router.post("/PersonalDietPlan", jwtToken, postPersonalDietPlan);
router.post("/TimeManagement", jwtToken, postTimeManagent);
router.post("/forgotPassword", postforgotPassword);
router.post("/otpVerify", postVerifyOtp);
router.post("/Habit", jwtToken, postHabit);
router.get('/getRole', jwtToken, getRole);


module.exports = router;
