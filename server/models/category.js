const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    unique: true,
  },
  slots: [Number],
});

const tokenSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  token: {
    type: String,
    required: true,
  },
});

module.exports = {
  Category: mongoose.model("category", CategorySchema),
  Token: mongoose.model("Token", tokenSchema),
};
