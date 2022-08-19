const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a Task name "],
    trim: true,
    maxlength: [20, "max-length is 20 "],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = taskModel = mongoose.model("task", taskSchema);
