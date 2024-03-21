const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`this server run at ${PORT}`);
});
//midddle ware
app.use(express.json());

const newRoutes = require("./route/todoroute");
newRoutes.use("/api/v1", newRoutes);

const dbConnection = require("./config/database");
dbConnection();

app.get("/", (req, res) => {
  res.send(`<h1>Hello baby kese ho </h1>`);
});
