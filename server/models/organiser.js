const mongoose = require("mongoose");

const pref = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
    enum: [0, 1, 2, 3],
  },
});

const OrganiserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  registration_no: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  cgpa: {
    type: Number,
    require: true,
  },
  pref_1: pref,
  pref_2: pref,
  experience: {
    type: String,
  },
});

module.exports = {
  Organiser: mongoose.model("Organiser", OrganiserSchema),
};
