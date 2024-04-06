const express = require('express');
const app = express();
app.use(express.json({limit : '50mb'}));
require('dotenv').config();
const PORT = process.env.PORT || 7600;
const playerdb = require('./config/playerdb');
playerdb()
const newRoutes = require('./routes/playerRoutes')

app.get('/' , (req , res)=> {
    res.send(`<h1>Welcome to home routes</h1>`);
})
app.get('/some' , (req , res)=> {
    res.send(`<h1>Welcome to some routes</h1>`);
})


app.listen(PORT, (req , res)=> {
    console.log(`Server is runnning on portNum ${PORT}`);
});

app.use('/api/t20/player' , newRoutes )