const mongoose = require("mongoose");
require("dotenv").config();

const database = (req, res) => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log("Facing the error in connecting the database");
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = database;
