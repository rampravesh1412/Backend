const express = require("express");
const app = express();

app.listen(3100, () => {
  console.log(`this server run at port : 3100`);
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`<delete>Demo6 js</delete>`);
});

app.post("/swag/king", (req, res) => {
  const { userName, like } = req.body;
  console.log(userName);
  console.log(like);
  res.send("successfully swag king");
});
