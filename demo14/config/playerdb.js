const mongoose = require('mongoose');
require('dotenv').config()
const playerdb = async () => {
    await mongoose.connect(process.env.DB_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then( ()=> console.log("database connected successfully")).catch((err)=> {
        console.error(`Error connecting to database: ${err}`);
        process.exit(1)

    })
}

module.exports = playerdb;