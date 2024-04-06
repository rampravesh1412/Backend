const mongoose = require('mongoose');


const cricketerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        
    },
    email:{
        type: String,
        required: true,
        trim : true,
        unique : true,
    },
    password:{
        type:String,
        required : true
    },
    role : {
        type : String,
        enum : ['bowler' , 'bastman' , 'allrounder' , 'coach'],
        required :true
    },
    country : {
        type: String,
        required: true
    },
    battingPosition : {
        type : Number,
        enum : [0,1,2,3,4,5,6,7,8,9,10]
    },
    bowlerType : {
        type : String,
        enum : ['pacer' , 'spinner' , 'mediumPacer' , 'none'],
        required : true
    }
})


module.exports = mongoose.model('cricketPlayer' , cricketerSchema)