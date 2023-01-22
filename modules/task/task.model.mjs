import mongoose from "mongoose";
const { model, Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: { type: String, require: true },
    done: { type: Boolean, require: false },
  },
  { timestamps: true }
);

export default model("task", taskSchema);
