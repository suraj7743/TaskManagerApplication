const express = require("express");
const route = express();
const taskController = require("../Controller/taskController");
route.get("/", taskController.getAllTask);
route.post("/", taskController.postTask);
module.exports = route;
