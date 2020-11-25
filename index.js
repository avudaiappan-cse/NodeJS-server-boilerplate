const express = require("express");

const PORT = 8000;
const app = express();

app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) console.error(err.message);
  console.log("Application Started");
});
