const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const PersonalDietPlanSchema = mongoose.Schema(
    {
      meal1: {
        type: String,
        required: true,
      },
      meal2: {
        type: String,
        required: true,
      },
      snack1: {
        type: String,
        required: true,
      },
      snack2: {
        type: String,
        required: true,
      },
      snack3: {
        type: String,
        required: true,
      },


    },
);
// eslint-disable-next-line new-cap
const personalModel = new mongoose.model('personalcollection',
    PersonalDietPlanSchema);
module.exports = personalModel;

