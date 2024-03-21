const mongoose = require("mongoose");
require("dotenv").config();
const dbConnection = (req, res) => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connecteds");
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = dbConnection;
