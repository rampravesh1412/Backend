const Player = require('../models/playermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async(req , res) => {
    try {
        const {name , password , email , role} = req.body;
        //check if player already exists in
        const emailFinder = await Player.findOne({email : email})
        if(emailFinder){
            return res.status(400).json({
                success : false,
                message : "player Already Exists"
            })
        };
       const hashPassword =  await bcrypt.hash(password , 10);

      const player = await Player.create({name , password : hashPassword , email , role})

      return res.status(202).json({
        success : true,
        message : "Signed Up Successfully",
        data : player
      })



        
    } catch (error) {
        return res.status(404).json({
            success: false,
            message : 'signed  up failed'


        })
        
    }

}


exports.signin = async(req , res) => {
    try {
        const {email , password} = req.body;

        let player = await Player.findOne({email :  email});

        if( !player ) {
           return  res.status(400).json({
            success : false,
            message:"Email is not valid!"
           })
        }

      try {
        const payload = {
            name : player.name,
            id : player._id ,
            role : player.role
        }
        if(await bcrypt.compare(password , player.password )){
            let token = jwt.sign(payload , process.env.SECERET_KEY , {
                expiresIn :"2h"
            })

            player = player.toObject();
            player.token = token;
            player.token.password = undefined;

            return res.cookie("token" , token).json({
                success: true ,
                message : 'successfully Login user',
                name : player.name,
                id : player._id ,
                role : player.role ,
                token : token
            })
            
            
        }else{
            return res.status(404).json({
                success : false,
                message :"Password is incorrect!"
            })
        }
        
      } catch (error) {
        return res.status(202).json({
            success : false,
            message : "please Enter the Valid password",
            
        })
        
      }


        
    } catch (error) {
        console.log('Error >> ', error);
        return res.status(500).json({
            success : false,
            message : "Something went wrong in signin process !"
            });
        
    } 

}