const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const database = require('./config/database');
database();

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const userRoutes = require('./routes/userRoutes')
app.use('/api/v1', userRoutes );

app.get('/' , (req , res)=> {
    res.send(`<h1>Welcome to the API</h1>`)
})