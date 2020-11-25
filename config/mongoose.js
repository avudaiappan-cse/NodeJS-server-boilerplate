const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app-auth", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting DB.."));

db.once("open", () => {
  console.log("Successfully connected to database :: MONGODB");
});

module.exports = db;
