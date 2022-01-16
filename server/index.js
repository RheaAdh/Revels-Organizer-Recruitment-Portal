require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const environment = require("./config/environment");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Organizer Portal API", success: true });
});

const PORT = process.env.PORT || 5000;

const start = () => {
  if (!environment.mongoURI) {
    console.log("Error: mongoURI missing !!");
    return;
  }
  connectDB();

  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
};

start();
