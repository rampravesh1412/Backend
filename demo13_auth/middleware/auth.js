const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req , res , next) => {
    try {
        const token = req.body.token;

        if(!token){
            return res.status(402).json({
                success : false,
                message : `Token is required`
            })
        }

        try {
            const payload = jwt.verify(token , process.env.SECERT_KEY );
            req.user = payload;
            
        } catch (error) {
            console.log(`Error in auth middleware ${error}`);
            return res.status(403).json({
                success : false,
                message : 'this token is invalid'
            })
            
        }

        next()


    }catch (error) {
        return res.status(400).json({
            success : false,
            message : 'something went wrong while compling the token'
        })
        
    }

}

exports.isStudent = (req , res , next) => {
    try {
        const userRole = req.user.role;
        if(userRole !== 'user'){
            return res.status(401).json({
                success : false,
                message : 'You are not authorized to perform student protected routes'
            })
        }
        next()
    } catch (error) {
        return  res.status(404).json({
            success:false,
            message:'User routes not matching'
           });
        
    }
}

exports.isAdmin = (req , res ,next) => {
    try {
        const userRole = req.body.role;
        if(userRole !== "admin"){
            return res.status(402).json({
                success : false,
                message : 'You are not authorized to perform admin protected routes'
            })

        }
        next()
        
    } catch (error) {
        return  res.status(500).send({
            success : false,
            message : 'user routes are not matching'
            
        })
        
    }

}