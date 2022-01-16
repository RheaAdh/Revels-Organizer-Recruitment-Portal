if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb+srv://" +
      process.env.mongo_prod +
      "@cluster0.47gsc.mongodb.net/orgPortal?retryWrites=true&w=majority",
  };
} else if (process.env.NODE_ENV === "development") {
  module.exports = {
    mongoURI:
      "mongodb+srv://" +
      process.env.mongo_dev +
      "@cluster0.47gsc.mongodb.net/orgPortal?retryWrites=true&w=majority",
  };
}
