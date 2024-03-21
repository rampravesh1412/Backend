const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("My 8000 port pr chal rha hu bhai");
});

app.get("/", (request, response) => {
  response.send("ye dekho home page ka route set ho gya");
});

app.post("/api/swag4u", (request, response) => {
  const { name, company } = request.body;
  console.log(name);
  console.log(company);
  response.send("cars api sents the sucessfully");
});
