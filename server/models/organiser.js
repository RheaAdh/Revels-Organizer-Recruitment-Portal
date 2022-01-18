const mongoose = require("mongoose");

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
  pref_1: {
    type: String,
    required: true,
  },
  pref_2: {
    type: String,
  },
  slot_1: {
    type: String,
  },
  slot_2: {
    type: String,
  },
});

module.exports = {
  Organiser: mongoose.model("Organiser", OrganiserSchema),
};
