const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  slots: [Number],
});

module.exports = { Category: mongoose.model("category", CategorySchema) };
