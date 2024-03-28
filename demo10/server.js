const express = require('express');
const app = express();

require('dotenv').config();
const portNum = process.env.PORT || 8000;
app.use(express.json());
// console.log(portNum);

app.listen(portNum, () => {
    console.log(`Server is running on ${portNum}`);
});

const newRoutes = require('./routes/student.route')
app.use('/api/v1' , newRoutes)

app.get('/' , (req,res)=> {
    res.send(`<h1>I am Home Routes</h1>`)
})

app.post('/hello' , (req , res)=> {
    res.send("Hello World");
})

const dbConnection = require('./config/database')
dbConnection()