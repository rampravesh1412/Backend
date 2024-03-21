const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// BODY parser

app.use(express.json());

const todoRout = require("./routes/todosRoutes");

app.use("/api/v1", todoRout);

app.listen(PORT, () => {
  console.log(`server are running successfully at port no ${PORT}`);
});

const dbconnection = require("./config/database");
dbconnection();

app.get("/", (req, res) => {
  res.send(`<h1>hello baby boy kese ho </h1>`);
});
