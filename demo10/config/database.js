const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL , {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })

        console.log( "Database Connected Successfully" );
        
    } catch (error) {
        console.log("Error Connecting to Database");
        console.log( error.message);
        process.exit(1);
        
    }

}

module.exports = dbConnection;