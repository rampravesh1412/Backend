const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("server started at 3000 port number");
});

app.get("/", (req, res) => {
  res.send("hello kese ho saare bhai");
});

app.get("/sayhello" , (req , res) => {
  res.send("Hello !");
})

app.get("/about", (req, res) => {
  res.send("my ek about hu pagal kahika");
});

app.post("api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  console.log("post request successfully");
});
