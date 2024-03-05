/* eslint-disable quotes */
/* eslint-disable new-cap */
const express = require("express");
const router = express.Router();

const {
  postSignup,
  postLogin,
  postforgotPassword,
  postVerifyOtp,
  postPersonalDietPlan,
  postTimeManagent,
  postHabit,
} = require("../Controllers/CommonControllers");
const jwtmiddleware = require("../Middleware/Jwt");

router.post("/signup", postSignup);
router.post("/login", postLogin);
router.post("/PersonalDietPlan", jwtmiddleware, postPersonalDietPlan);
router.post("/TimeManagement", postTimeManagent);
router.post("/forgotPassword", postforgotPassword);
router.post("/otpVerify", postVerifyOtp);
router.post("/Habit", postHabit);
module.exports = router;
