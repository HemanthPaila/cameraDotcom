const express = require("express");
const app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.render("home");
});
app.get("/camera", function (req, res) {
  res.render("camera");
});
app.get("/camerasetup", function (req, res) {
  res.render("camerasetup");
});
app.post("/update", function (req, res) {
  var name = req.body.name;
  var age = req.body.age;
  var camera = req.body.camera;
  var color = req.body.color;
  // console.log(name + " " + age + " " + camera + " " + color);
  res.redirect("camerasetup");
});
app.listen(3001, function () {
  console.log("server running at port numver 3001!");
});
