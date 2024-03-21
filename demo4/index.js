const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 6000;

app.use(express.json());
const blog = require("./router/blog");
app.use("/api/v1", blog);
const dataBaseConnect = require("./config/database");
dataBaseConnect();
app.listen(PORT, () => {
  console.log(`this server run at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello baby kese ho </h1>`);
});
