const User = require("../modles/userModle");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.signup = async (req, res) => {
  const { username, firstname, lastname, email, password, role } = req.body;

  const userExit = await User.findOne({ email: email });

  if (userExit) {
    return res.status(400).json({
      success: true,
      message: "This email id is already register",
    });
  }

  let hashPassword;
  try {
    hashPassword = await bcrypt.hash(password, 10);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "password hashing issue",
    });
  }

  const user = await User.create({
    username, firstname, lastname, email, password : hashPassword, role
  })

  return res.status(200).json({
    success : true , 
    message : "User created successfully" , 
  })
};



//  login controller

exports.login = async(req , res) => {

    const {email , password} = req.body;

    if(!email && !password){
      return res.status(400).json({
        success : false,
        message : 'username and password are empty'
      })
    }
    let user = await User.findOne({email})

    if(!user){
      return res.status(402).json({
        success : false,
        message : 'user are not register'
      })
    }

    const payload = {
      username : user.username, 
      firstname : user.firstname, 
      lastname : user.lastname,
      email : user.email, 
      id : user._id,
      role : user.role
    }
     
   

    if( await bcrypt.compare( password ,user.password )){
      // console.log("true")
      let token = jwt.sign(payload , process.env.SECERT_KEY , {
        expiresIn : "7d"
      })
      user =  user.toObject();
      user.token = token;
      user.password = undefined;

      // const options = {
      //   expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      // }
      // we can give the coptions in cookie inside of parameter

       res.cookie("token" , token  ).status(200).json({
        success: true ,
        token,
        user,
        message:"login successfully",
        
      });




    }else{
      return res.status(403).json({
        success : false,
        message : 'Password is incorrect'
      })
    }



}