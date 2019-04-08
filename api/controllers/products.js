var express = require('express');

var router = express.Router();

router.route('/')

    // GET ALL DATA
    .get(function (req, res){
      res.send({list: 'return list data'});
    })

    // INSERT DATA
    .post(function (req, res){
      res.send({list: 'insert data'});
    });

router.route('/:id')

    // GET BY ID
    .get(function (req, res){
      console.log(req);
  
      res.send({list: 'GET BY ID'});
    })

    // UPDATE DATA
    .put(function (req, res){
        res.send({list: 'UPDATE DATA'});
    })

    // DELETE DATA
    .delete(function (req, res){
       res.send({list: 'DELETE DATA'});
    });


module.exports = router;