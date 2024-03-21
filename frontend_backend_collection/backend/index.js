const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Kese ho ji</h1>`);
});
