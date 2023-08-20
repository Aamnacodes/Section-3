// addblog
//getbyid

const express = require('express');
const router = express.Router();

router.get('/add',(req,res) => {
    res.send('Response from blog add');
});

router.get('/getbyid',(req,res) => {
    res.send('Response from blog id');
});
router.get('/getall',(req,res) => {
    res.send('Response from user get all');
});

// getall
module.exports = router;