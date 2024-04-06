const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const database = require('./config/database');
database()
const newRoutes = require('./routes/cricketPlayer');
const PORT = process.env.PORT || 15000;

app.listen(PORT , ()=> {
    console.log(`This applicatin is running at ${PORT}`)
})

//default routes
app.get('/' , (req , res) => res.send(`<h1>Welcome to home routes</h1>`));

//mounting routes
app.use('/api/v1' , newRoutes);