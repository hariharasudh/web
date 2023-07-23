var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var mongoose=require('mongoose');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/submit',function (req,res){
  mongoClient.connect('mongodb://0.0.0.0:27017/sample', function(err, db) {
  if(!err){
    console.log('we are connected');
  }  
  })
  console.log(req.body);

  res.send("got it");

});
module.exports = router;