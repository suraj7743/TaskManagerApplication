const taskModel = require("../model/taskModel");
const catchAsync = require("../utilis/catchAsync");
const getAllTask = catchAsync(async (req, res, next) => {
  res.render("taskMainpage.ejs");
});

const postTask = catchAsync(async (req, res, next) => {
  const { taskName } = req.body;
  let err = [];
  if (taskName === "suraj") {
    err.push({
      message: "Valid Name Please.. ",
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
