const express = require("express");
const app = express();

require("dotenv").config;
// Connecting to database
const database = require("./config/database");
database();
//middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//Routes
const routesFile = require("./routes/routesFile");
app.use("/api/v1/upload", routesFile);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port number ${PORT} `);
});
