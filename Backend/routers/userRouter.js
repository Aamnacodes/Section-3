const express= require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    //json 
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        setTimeout(  () => {res.json(result);},3000)
        
    }).catch((err) => {
        console.log(err);nnnnnnnnn
        res.status(500).json(err);
    });
  
});



// : denotes url parameter
router.get('/getbyemail/:email', (req,res) => {
    console.log(req.params.email);


    // find function matches all documents
    // find0ne function matches and returns only first document
    Model.find({email : req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.get('/getall',(req,res) => {

    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
  
});
router.get('/getbyid/:id',(req,res) => {

    // Model.findOne({_id : req.params._id})
    Model.findById(req.params.id)
    .then((result) => {
      res.json(result);  
    }).catch((err) => {
        res.status(500).json(err);
    });

});

router.delete('/delete/:id',(req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/update/:id',(req,res) => {
   Model.findByIdAndUpdate(req.params.id,req.body ,{new : true})
   .then((result) => {
       res.json(result);
   }).catch((err) => {
     console.log(err);
     res.status(500).json(err);
   });
});

router.post('/authenticate',(req,res) => {
    Model.findOne(req.body)
    .then((result) => {
      if(result !== null) res.json(result);
      else res.status(401).json({message : 'Login failed'}) 
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;