const express = require("express");
const app = express();
const database = require("./config/database");
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`this server run at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello kese ho ji</h1>`);
});

database();

const userRoute = require("./routes/userRoute");
app.use("/api/v1", userRoute);

// app.post("/api/v1", (req, res) => {
//   console.log("hello");
// });
