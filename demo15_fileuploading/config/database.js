const mongoose = require('mongoose');
require('dotenv').config()
const dbConnection = async () => {
   
    await mongoose.connect(process.env.DB_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(()=>{
        console.log('Database connected')
    }).catch((error)=> {
        console.log(error)
        console.log('Database connection failed');
        process.exit(1)

    })

    
   
}

module.exports = dbConnection