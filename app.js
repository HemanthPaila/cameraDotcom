const express = require("express");
const app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
var mysql = require("mysql2");
var connection = mysql.createConnection({
  localhost: "3306",
  user: "root", // your root username
  password: "Hemanth@123",
  database: "cameradotcom", // the name of your db
});
app.get("/", function (req, res) {
  res.render("home");
});
app.get("/camera", function (req, res) {
  res.render("camera");
});
app.get("/camerasetup", function (req, res) {
  res.render("camerasetup");
});
app.get("/profile", function (req, res) {
  res.render("profile");
});
app.get("/checknow", function (req, res) {
  res.render("checknow");
});
app.get("/booknow", function (req, res) {
  res.render("booknow");
});
app.get("/menu", function (req, res) {
  connection.query("select * from profile", function (error, result, fields) {
    if (!error) {
      res.render("menu", { data: result });
    } else {
      res.redirect("/");
    }
    res.end();
  });
});
app.post("/update", function (req, res) {
  var data = {
    name: req.body.name,
    age: req.body.age,
    camera: req.body.camera,
    color: req.body.color,
  };
  // console.log(name + " " + age + " " + camera + " " + color);
  res.render("card", {
    personname: data.name,
    personage: data.age,
    personcamera: data.camera,
    personcolor: data.color,
  });
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/signuppage", function (req, res) {
  res.render("signup");
});
app.post("/signin", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query(
    "select * from signin where username=? and password=?",
    [username, password],
    function (error, result, fields) {
      if (result.length > 0) {
        res.render("home");
      } else {
        res.render("login");
      }
      res.end();
    }
  );
});
app.post("/signup", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query(
    "insert into signin(username,password) values(?,?)",
    [username, password],
    function (error, result, fields) {
      if (!error) {
        res.render("login");
      } else {
        res.redirect("/");
      }
      res.end();
    }
  );
});
app.post("/add", function (req, res) {
  var name = req.body.name;
  var age = req.body.age;
  var sex = req.body.sex;
  connection.query(
    "insert into profile (name,age,sex) values(?,?,?)",
    [name, age, sex],
    function (error, result, fields) {
      if (!error) {
        res.redirect("/menu");
      } else {
        res.render("/");
      }
      res.end();
    }
  );
});
app.get("/home", function (req, res) {
  res.render("home");
});
app.listen(3001, function () {
  console.log("server running at port numver 3001!");
});
