const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;
const database = async () => {
    try{
        await mongoose.connect(dbUrl , {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log("Database Connected Success");

   

    }catch{
        console.log("Database Connection Failed");
        

    }

}

module.exports = database;