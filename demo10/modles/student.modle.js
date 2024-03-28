const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        maxlength: 50
    } ,
    lastName: {
        type:String,
        required:true,
        maxlength : 50
    },
    isAdult : {
        type :Boolean,
        require : false,

    }, 
    email : {
        type : String,
        required : true
    },
    rollNum : {
        type : Number,
        required : true
    }

}
,
    {
        timestamps:  true //this will add createdAt and updatedAt
    }
)

module.exports= mongoose.model("Student",studentSchema);