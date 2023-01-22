import mongoose from "mongoose";
import log from "@ajar/marker";
export const connectDB = async (uri) => {
  await mongoose.connect(uri);
  log.magenta(`connect to mongoDB`);
};
