const cricketPlayer = require('../modles/cricketerPlayers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
exports.singin = async(req , res) => {
    try {
        const {name,email,password,role,country,battingPosition,bowlerType} = req.body;

        const exitData = await cricketPlayer.findOne({email : email});

        if(exitData){
            return res.status(400).json({
                success:false,

            })
        }

        const hashPassword = await bcrypt.hash(password ,10)


        await cricketPlayer.create({
            name:name ,  
            email:email ,  
            password:hashPassword ,  
            role:role ,  
            country:country ,  
            battingPosition:battingPosition ,  
            bowlerType:bowlerType  
        });

        res.status(201).json({
            success:true,
            data: {
                name : name,
                email : email,
                password : hashPassword,
                role : role,
                country : country,
                battingPosition : battingPosition,
                bowlerType : bowlerType

            },
            message : "user are created the account"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : 'Signin problem'
        })
        
    }

}


// signup

exports.singup = async(req , res) => {
    try {
        const {email , password}  = req.body;
        let userEmail = await cricketPlayer.findOne({email:email});

        if(!userEmail){
            return res.status(401).json({
                success:false,
                message:"User not found!"
            });
        }

        
        let payload = {
            name : userEmail.name ,
            email : userEmail.email ,
            role : userEmail.role,
            country : userEmail.country,
            battingPosition : userEmail.battingPosition,
            bowlerType : userEmail.bowlerType

        }
       // compare password
       if(await bcrypt.compare(password ,userEmail.password )){
        const token = jwt.sign(payload ,process.env.SECERT_KEY );

        userEmail = userEmail.toObject();
        userEmail.token = token;
        userEmail.token.password = undefined ;

       return res.cookie("token" , userEmail.token).json({
        success  : true ,
        message  : 'Sign in Successfully' ,
        data     : userEmail
        })
        
        
       }

        
        
    } catch (error) {
        return res.status(500).json({
            success : false ,
            message : error + "gekkk"
        })
        
    }

}