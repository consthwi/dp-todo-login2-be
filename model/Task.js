const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = Schema(
  {
    task: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
      // author필드는 User 참조
      // e.g) ObejctId값이 111이면,
      //      User에서 ObjectId 111에 해당하는 값을 모두 참조함 (=가짐, 스탠바이, 출력가능)
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
