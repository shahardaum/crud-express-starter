import express, { Router } from "express";
import taskModel from "./task.model.mjs";
import raw from "./middleware/route.async.wrapper.mjs";
// create router object
const router = express.Router();

// apply middleware

// define routing functions

// Get Tasks
router.get(
  "/",
  raw(async (req, res) => {
    const task = await taskModel.find();
    res.status(200).json(task);
  })
);

// Get Task by id
router.get(
  "/:id",
  raw(async (req, res) => {
    const task = await taskModel.findById(req.params.id);
    res.status(200).json(task);
  })
);

// update/ replace task
router.put(
  "/:id",
  raw(async (req, res) => {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      upsert: false,
    });
    res.status(200).json(task);
  })
);

// Merge task
router.patch(
  "/:id",
  raw(async (req, res) => {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      upsert: false,
    });
    res.status(200).json(task);
  })
);

// CREATE TASK
router.post(
  "/:id",
  raw(async (req, res) => {
    const task = await taskModel.create(req.body);
    res.status(200).json(task);
  })
);
// Delete TASK
router.delete(
  "/:id",
  raw(async (req, res) => {
    const task = await taskModel.findByIdAndRemove(req.params.id);
    res.status(200).json(task);
  })
);

export default router;
