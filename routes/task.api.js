const express = require("express");
const taskController = require("../controller/task.controller");
const authController = require("../controller/auth.controller");
const router = express.Router();

// Create Task
router.post("/", authController.authenticate, taskController.createTask);

// Get Task
router.get("/", taskController.getTask);

// Update Task
router.put("/:id", taskController.updateTask);

// Delete Task
router.delete("/:id", taskController.deleteTask);

module.exports = router;
