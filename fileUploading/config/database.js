const mongoose = require("mongoose");

require("dotenv").config();

const database = (req, res) => {
  // Create a new Mongo DB connection using the provided URI from .env file
  mongoose
    .connect(process.env.DATABASE_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected  Sucessfully");
    })
    .catch((err) => {
      console.log("we are facing the some issue in database");
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = database;
