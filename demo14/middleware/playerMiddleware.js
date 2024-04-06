const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req , res , next) => {
    try {
        const token = req.body.token;

        if(!token){
            return res.status(400).json({
                success : false,
                message :  'Token is required'
            })
        }

        const payload = jwt.verify(token , process.env.SECERET_KEY);
        req.player =  payload ;
        // console.log(req.user.role)
        next();
        
    } catch (error) {
        return res.status(401).json({
            success : false,
            message : "Auth failed",
            error: error.message
        })
        
    }
    
}

exports.bastman = (req , res , next) => {
    try {
        if(req.player.role !== "bastman"){
            return res.status(402).josn({
                success : false,
                message : "This is protected routes of expect bastman"
            })
        }

    

        next()
        
    } catch (error) {
        return  res.status(500).json({
            success : false,
            err : error
        });
        
    }

}

exports.bowler = (req , res , next) => {
    try {
        if(req.player.role !== "bowler"){
            return res.status(402).josn({
                success : false,
                message : "This is protected routes of expect bowler"
            })
        }

    

        next()
        
    } catch (error) {
        return  res.status(500).json({
            success : false,
            err : error
        });
        
    }

}

exports.allrounder = (req , res , next) => {
    try {
        if(req.player.role !== "allrounder"){
            return res.status(402).josn({
                success : false,
                message : "This is protected routes of expect allrounder"
            })
        }

    

        next()
        
    } catch (error) {
        return  res.status(500).json({
            success : false,
            err : error
        });
        
    }

}

exports.coach = (req , res , next) => {
    try {
        if(req.player.role !== "coach"){
            return res.status(402).josn({
                success : false,
                message : "This is protected routes of expect coach"
            })
        }

    

        next()
        
    } catch (error) {
        return  res.status(500).json({
            success : false,
            err : error
        });
        
    }

}
