const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());

app.listen(3000, () => {
  console.log(`This application run at ${3000} Port`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>`);
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("post request successfully");
});
