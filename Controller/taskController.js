const taskModel = require("../model/taskModel");
const catchAsync = require("../utilis/catchAsync");
const getAllTask = catchAsync(async (req, res, next) => {
  res.render("taskMainpage.ejs");
});
let err = [];
const postTask = catchAsync(async (req, res, next) => {
  const { taskName } = req.body;
  if (taskName === "suraj") {
    err.push({
      message: "Required name Field ",
    });
    return res.render("taskMainpage.ejs", {
      err,
    });
  }
});
module.exports = {
  getAllTask,
  postTask,
};
