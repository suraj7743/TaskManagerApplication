const express = require("express");
const router = express();
const taskController = require("../Controller/taskController");
router.get("/", taskController.getAllTask);
router.post("/", taskController.postTask);
module.exports = router;
