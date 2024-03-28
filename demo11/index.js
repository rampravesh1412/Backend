const express = require('express');
const app = express();
const database = require('./config/database');
const PORT =  process.env.PORT || 3800;
const studentRoutes = require('./routes/students');
app.use(express.json());
require('dotenv').config()

database()
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get( '/', (req, res) => {
    res.send(`<h1>Welcome to the Home Routes</h1>`)
});

app.use('/api/v1' , studentRoutes)
