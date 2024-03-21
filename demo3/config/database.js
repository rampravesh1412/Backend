const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("database connected successfully"))
    .catch((error) => {
      console.log("Facing the some issue to connect database");
      console.log(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
