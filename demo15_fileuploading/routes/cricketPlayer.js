const express = require('express');
const router = express.Router();
const {singin , singup} = require('../controller/controllerPlayer')

// Require controller modules.
router.post('/signin' , singin)
router.post('/signup' , singup)
router.post('/bastman' , (req , res)=> {
    res.send(`<h1>I am bastman routes</h1>`)
})
router.post('/bowler' , (req , res)=> {
    res.send(`<h1>I am bowler routes</h1>`)
})
router.post('/allrounder' , (req , res)=> {
    res.send(`<h1>I am  allrounder</h1>`)
})

module.exports = router;
