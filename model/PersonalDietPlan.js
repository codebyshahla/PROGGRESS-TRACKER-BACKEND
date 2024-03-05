const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const PersonalDietPlanSchema = mongoose.Schema({
  meal1: {
    type: {
      food: String,
      time: String,
    },
    required: true,
  },
  meal2: {
    type: {
      food: String,
      time: String,
    },
    required: true,
  },
  snack1: {
    type: {
      food: String,
      time: String,
    },
    required: true,
  },
  snack2: {
    type: {
      food: String,
      time: String,
    },
    required: true,
  },
  snack3: {
    type: {
      food: String,
      time: String,
    },
    required: true,
  },
});
// eslint-disable-next-line new-cap
const personalModel = new mongoose.model(
    'personalcollection',
    PersonalDietPlanSchema,
);
module.exports = personalModel;
