/* eslint-disable max-len */
/* eslint-disable new-cap */
const userModel = require('../model/Userschema');
const PersonalDietPlan = require('../model/PersonalDietPlan');
const TimeManagement = require('../model/TimeManagement');
const bcrypt = require('bcrypt');
const {sendOtp} = require('../utility/twilio');
const object = {
  postSignup: async (req, res) => {
    try {
      console.log(req.body.formData);
      const {username, email, mobileNumber, password} = req.body.formData;
      const existingUser = await userModel.findOne({email: email});

      if (existingUser) {
        res.status(400).json({error: 'user already exist. please login '});
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        const user = new userModel({
          username: username,
          email: email,
          mobileNumber: mobileNumber,
          password: hashedPassword,
        });
        await user.save();
        console.log(req.body, 'from body');
        res.status(200).json({message: 'data saved successfully'});
      }
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({error: 'Internal server error.'});
    }
  },
  postLogin: async (req, res) => {
    try {
      const {email, password} = req.body.formData;
      console.log(email, password);
      const existingUser = await userModel.findOne({email});
      if (!existingUser) {
        res.status(400).json({error: 'user already exist.'});
        console.log('user  not found');
      }
      const isPasswordValid = await bcrypt.compare(
          password,
          existingUser.password,
      );
      if (!isPasswordValid) {
        return res.status(400).json({error: 'Invalid password.'});
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({error: 'Internal server error.'});
    }
  },
  postforgotPassword: async (req, res) => {
    try {
      const {phoneNumber} = req.body;
      console.log(phoneNumber);
      if (phoneNumber) {
        sendOtp(phoneNumber);
      }
    } catch (error) {}
  },
  postVerifyOtp: async (req, res) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const {otp} = req.body;
    } catch (error) {
      console.error('An error occured');
    }
  },
  resetPassword: async (req, res) => {},

  postPersonalDietPlan: async (req, res) => {
    const {meal1, meal2, snack1, snack2, snack3} = req.body;
    const addPersonalDiet = new PersonalDietPlan({
      meal1: meal1,
      meal2: meal2,
      snack1: snack1,
      snack2: snack2,
      snack3: snack3,
    });
    await addPersonalDiet.save();
    console.log(meal1, meal2, snack1, snack2, snack3);
  },

  postTimeManagent: async (req, res)=>{
    const {title, time, priority} = req.body.newTask;
    console.log(title, time, priority);
    const addTimeManagement = new TimeManagement({
      title: title,
      time: time,
      priority: priority,
    });
    await addTimeManagement.save();
    console.log(title, time, priority);
  },
};

module.exports = object;
