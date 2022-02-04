const mongoose = require("mongoose");

async function connectDB() {
  mongoose
    .connect(
      // process.env.mongo_dev,
      "mongodb+srv://" +
        process.env.mongo_dev +
        "@cluster0.47gsc.mongodb.net/orgPortal?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch(console.log("DB NOT CONNECTED"));
}
module.exports = connectDB;
