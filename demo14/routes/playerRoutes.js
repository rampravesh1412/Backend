const express = require('express');
const router = express.Router();
const {signup , signin} = require('../controller/playersController');
const {auth , bastman , bowler , allrounder , coach} = require('../middleware/playerMiddleware')


router.post('/signup' , signup)

router.post('/signin' , signin)



// protect routes


router.post('/bastman' , auth ,bastman , (req , res)=> {
    res.send("only accesser for bastman" );
})
router.post('/bowler' ,auth , bowler, (req , res)=> {
    res.send("only accesser for bowler");
})
router.post('/allrounder' , auth, allrounder , (req , res)=> {
    res.send("only accesser for allrounder");
})
router.post('/coach' ,auth , coach ,  (req , res)=> {
    res.send("only accesser for coach");
})


module.exports = router