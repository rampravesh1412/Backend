const express = require('express');
const router = express.Router();

router.post('/students' , (req , res)=>{
    res.send("data sent");
});

module.exports = router;
