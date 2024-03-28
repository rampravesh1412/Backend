const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String,
         required: true ,
         unique :  true
        },
    age: {
        type : Number , 
        required : true
    },
    role: {
        type : String ,
        enum : ['student' , 'teacher' , 'developer'],
        default : 'student',
    }

})

module.exports = mongoose.model('student' , studentSchema)