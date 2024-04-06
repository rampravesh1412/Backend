const mongoose = require('mongoose')
const playerSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    email : {
        type : String ,
        required : true,
        unique : true

    },
    role : {
        type : String,
        enum : ['bastman' , 'bowler' , 'allrounder' , 'coach'],  // only allow values in
        requird: true
    },
    password : {
        type : String,
        required : true,
    }
    
} )

module.exports = mongoose.model('Player' , playerSchema);