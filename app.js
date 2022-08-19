const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv").config("./.env");
const ejs = require("ejs");
const route = require("./routes/taskRoute");
const appError = require("./utilis/appError");
const catchAsync = require("./utilis/catchAsync");

//set templete engine
app.set("view-engine", ejs);
app.set("views", "./views");

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser("secret"));
app.use("/task", route);

app.use("*", (req, res, next) => {
  next(new appError("sorry this route cannot be found ", 400));
});

app.use((err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.status = err.status || "error";
  console.log(err.message);
  res.status(err.statuscode).json({
    status: err.status,
    message: err.message,
  });
});
app.listen(process.env.PORT || 8000, async (req, res, next) => {
  console.log("listening to server 8000 ");
});
