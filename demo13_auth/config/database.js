const mongoose = require('mongoose');
require('dotenv').config()
const database = async() => {
    // Connect to MongoDB.
    try {
        await mongoose.connect(process.env.DB_URL , {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        
        console.log("Database connected sucessfully !")
    } catch (error) {
        console.error(error);
        console.log("database connection error")
        process.exit(1);
        
    }

}

module.exports = database;