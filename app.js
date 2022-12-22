const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.render("home");
});
app.get("/camera", function (req, res) {
  res.render("camera");
});
app.listen(3001, function () {
  console.log("server running at port numver 3001!");
});
