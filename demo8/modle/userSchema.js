const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  emai: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    enum: ["Students", "Visitor", "Admin"],
  },
});

module.exports = mongoose.model("User", userSchema);
