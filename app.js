const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("home");
});
app.listen(3001, function () {
  console.log("server running at port numver 3001!");
});