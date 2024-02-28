/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const {
  postSignup,
  postLogin,
  postforgotPassword,
  postVerifyOtp,
  postPersonalDietPlan,
  postTimeManagent,
} = require('../Controllers/CommonControllers');

router.post('/signup', postSignup);
router.post('/login', postLogin);
router.post('/PersonalDietPlan', postPersonalDietPlan);
router.post('/TimeManagement', postTimeManagent);
router.post('/forgotPassword', postforgotPassword);
router.post('/otpVerify', postVerifyOtp);
module.exports = router;
