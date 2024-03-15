/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable new-cap */
const userModel = require("../model/Userschema");
const PersonalDietPlan = require("../model/PersonalDietPlan");
const TimeManagement = require("../model/TimeManagement");
const Habit = require("../model/Habit");
const bcrypt = require("bcrypt");
const { sendOtp } = require("../utility/twilio");
const jwt = require("jsonwebtoken");

const object = {
  postSignup: async (req, res) => {
    try {
      console.log(req.body.formData);
      const { username, email, mobileNumber, password, role } =
        req.body.formData;
      const existingUser = await userModel.findOne({ email: email });

      if (existingUser) {
        res.status(400).json({ error: "user already exist. please login " });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        const user = new userModel({
          username: username,
          email: email,
          mobileNumber: mobileNumber,
          password: hashedPassword,
          role: role,
        });
        await user.save();
        const payload = { email };
        const secretKey = process.env.JWT_TOKEN;
        const expires = 3 * 24 * 60 * 60;
        const token = jwt.sign(payload, secretKey, { expiresIn: expires });
        res
          .status(200)
          .json({ message: "data saved successfully", token, role });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  },
  postLogin: async (req, res) => {
    try {
      const { email, password } = req.body.formData;
      console.log("useremail", email, password);
      const existingUser = await userModel.findOne({ email });
      console.log(existingUser);
      if (!existingUser) {
        console.log("user  not found");
        return res.status(404).json({ error: "user not exist." });
      }
      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password,
      );
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid password." });
      }
      const payload = { email };
      const secretKey = process.env.JWT_TOKEN;
      const expires = 3 * 24 * 60 * 60;
      const token = jwt.sign(payload, secretKey, { expiresIn: expires });
      res
        .status(200)
        .json({ message: "success", token, role: existingUser.role });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  },
  postforgotPassword: async (req, res) => {
    try {
      const { phoneNumber } = req.body;
      console.log(phoneNumber);
      if (phoneNumber) {
        sendOtp(phoneNumber);
      }
    } catch (error) {}
  },
  postVerifyOtp: async (req, res) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { otp } = req.body;
    } catch (error) {
      console.error("An error occured");
    }
  },
  resetPassword: async (req, res) => {},

  postPersonalDietPlan: async (req, res) => {
    const { meal1, meal2, snack1, snack2, snack3 } = req.body;
    console.log(meal1);
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

  postTimeManagent: async (req, res) => {
    const { title, time, priority } = req.body.newTask;
    console.log(title, time, priority);
    const addTimeManagement = new TimeManagement({
      title: title,
      time: time,
      priority: priority,
    });
    await addTimeManagement.save();
    console.log(title, time, priority);
  },

  postHabit: async (req, res) => {
    try {
      const { hobby, time } = req.body;
      console.log(hobby, time);
      const addHabit = new Habit({
        hobby: hobby,
        time: time,
      });
      await addHabit.save();
      res.status(200).json({ message: "data saved succcesfully" });
      console.log(hobby, time);
    } catch (err) {
      console.error(err);
    }
  },
  getRole: async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodeToken = jwt.verify(token, process.env.JWT_TOKEN);
      const email = decodeToken.email;
      const checkRole = await userModel.findOne({ email: email });
      const role = checkRole.role;
      res.status(200).json({ role });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  },
};

module.exports = object;
