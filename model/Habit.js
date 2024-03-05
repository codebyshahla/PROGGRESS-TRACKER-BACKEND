/* eslint-disable new-cap */
const mongoose = require('mongoose');

const HabitSchema = mongoose.Schema({
  hobby: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
const Habits = new mongoose.model('HabitCollection',
    HabitSchema);
module.exports=Habits;
