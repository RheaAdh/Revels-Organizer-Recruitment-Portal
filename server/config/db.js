const mongoose = require("mongoose");
const environment = require("./environment");

async function connectDB() {
  mongoose
    .connect(environment.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch(console.log("DB NOT CONNECTED"));
}
module.exports = connectDB;
