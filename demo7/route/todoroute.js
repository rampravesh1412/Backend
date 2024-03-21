const express = require("express");
const router = express.Router();
const { createTodo } = require("../controller/todoController");

router.post("/createTodo", createTodo);
module.exports = router;
