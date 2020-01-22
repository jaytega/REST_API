//since api.js is where I am serving HTTP requests, it is good practice
//to modularize this into /routes

//each js needs to include express
const express = require('express');

//modular routes are used with express Router() so i store it in a const
const router = express.Router();

//*******the following code only mounts the routs to router***********

//I will be using mongoDB as the database the get request will pull from
router.get('/', function(req, res){
    res.send({type:'GET-REQUEST'});
});

//post is for adding to the DB
router.post('/', function(req, res){
  //req.body is from bodyParser
    console.log(req.body);
    res.send({type:'POST-REQUEST',
              name: req.body.name,
              job: req.body.job});
});

//put is for updating existing data in the DB
//:id is a variable (:) that will be replaced with the ID in the DB
router.put('/:id', function(req, res){
    res.send({type:'PUT-REQUEST'});
});

//delete is for removing existing data in the DB
//:id is a variable (:) that will be removed in the DB
router.delete('/:id', function(req, res){
    res.send({type:'DELETE-REQUEST'});
});

//*******the following code exports/exposes routes to index.js***********
module.exports = router;
