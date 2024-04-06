const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true

    },
    firstname : {
        type: String,
        required : true

    },
    lastname: {
        type: String,
        required : true
    },
    email : {
        type:String, 
        unique:true,
        required:true,
        lowercase:true,
        trim : true
    },
    password:{
        type : String,
        required : true,
    },
    role: {
        type :String,
        enum:['user','admin'],
        default:'user'
    }

})

module.exports = mongoose.model('User' , userSchema)