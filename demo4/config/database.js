const mongoose = require("mongoose");

require("dotenv").config();

const dataBaseConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database coonected");
    })
    .catch((er) => {
      console.log("Database connection facing the some issue");
      console.log(er);
      process.exit(1);
    });
};

module.exports = dataBaseConnect;
