const express = require("express");
const router = express.Router();

const {
  studentController,
  findStudent,
  studentUpdata
} = require("../controller/studentcontroller");

// creates routes

router.post("/students", studentController);
router.get("/students", findStudent);
router.put("/students/:id" , studentUpdata)

module.exports = router;
