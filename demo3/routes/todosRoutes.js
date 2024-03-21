const express = require("express");

const router = express.Router();

const { createtodo } = require("../controllers/createtodo");

router.post("/createtodo", createtodo);

module.exports = router;
