const taskModel = require("../model/taskModel");
const catchAsync = require("../utilis/catchAsync");
const getAllTask = catchAsync(async (req, res, next) => {
  const DatabaseItem = await taskModel.find();

  res.render("taskMainpage.ejs", {
    DatabaseItem,
  });
});

const postTask = catchAsync(async (req, res, next) => {
  const { taskName } = req.body;
  let err = [];
  let solved = [];
  let AllDAta = [];
  const taskmodelData = await taskModel.find({ name: req.body.taskName });

  if (taskmodelData.length === 1) {
    err.push({
      message: " Name already exist ",
    });
    return res.render("taskMainpage.ejs", {
      err,
    });
  } else {
    const data = new taskModel({
      name: req.body.taskName,
    });
    const saveData = await data.save();
    console.log(saveData.name);
    solved.push({
      message: " Task added .",
    });
    const DatabaseItem = await taskModel.find();

    res.render("taskMainpage.ejs", {
      solved,
      DatabaseItem,
    });
  }
});
module.exports = {
  getAllTask,
  postTask,
};
