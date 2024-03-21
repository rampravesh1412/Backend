const express = require("express");
const User = require("../modle/userSchema");
const router = express.Router();
const { singup } = require("../controller/auth");

router.post("/singup", singup);

router.post("/sayHello", () => {
  console.log("hello world");
});

module.exports = router;
