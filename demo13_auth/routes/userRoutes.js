const express = require('express')
const router = express.Router();

const {signup , login} = require('../controller/userController');
const {auth , isStudent , isAdmin} = require('../middleware/auth')
router.post('/signup' , signup);
router.post('/login' , login);

// protected routes
router.get('/testing' , auth , (req , res)=> {
    res.send(`Welcome to the testing`);
})
router.get("/user" , auth , isStudent , (req , res)=> {
    res.send("You are a student")
})

router.get("/admin" , auth , isAdmin , (req , res)=> {
    res.send("You are a Admin")
})



module.exports = router;