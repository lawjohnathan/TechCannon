var express = require('express');
var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next) {


    var query = "SELECT * FROM post ORDER BY id DESC ";

    database.query(query, function(error, data){

        if(error)
        {
            throw error;
        } else
        {
            response.render('database', {});

        }




    })
});