const mongoose = require('mongoose');
// eslint-disable-next-line new-cap
const TimeManagementSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
});

// eslint-disable-next-line new-cap
const TimeManagement = new mongoose.model('TimeManagementcollection',
    TimeManagementSchema);
module.exports = TimeManagement;
