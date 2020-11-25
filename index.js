const express = require("express");

const db = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport_JWTStrategy");
const PORT = 8000;
const app = express();
const morgan = require("morgan");

app.use(express.json());

app.use(morgan("tiny"));

app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) console.error(err.message);
  console.log("Application Started");
});

app.use(passport.initialize());
