import log from "@ajar/marker";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./mongoose.connection.mjs";
import taskRouter from "./modules/task/task.router.mjs";
// define express app
const app = express();
const { PORT, HOST, DB_URI } = process.env;

//middleware
app.use(morgan("env"));
app.use(cors());

// routing
app.use("/tasks", taskRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.use("*", (req, res) => {
  res.status(404).json({ message: `endpoint ${req.url} was not found` });
});

// make app listen on port
app.listen(PORT, HOST, () => {
  log.magenta(`http://${HOST}:${PORT}`);
  connectDB(DB_URI);
});
