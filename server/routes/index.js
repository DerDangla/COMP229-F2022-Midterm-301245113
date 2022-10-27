/*
'---------------------------------------------------------------'
'   Filename: server.routes.index.js                            '
'   Created by: Emander D. Dangla                               '
'   Student ID: 301245113                                       '
'   Web App: https://comp229-f22-midterm-301245113.herokuapp.com'
'   Date Created: 25/10/2022                                    '
'   Description: index routes file for Midterm Partical Test    '
'                                                               '
'---------------------------------------------------------------'
'   Modification History                                        '
'---------------------------------------------------------------'
'   Date            Developer           Modification            '
'   25/10/2022      Emander Dangla      Initial Creation        '
'---------------------------------------------------------------'*/

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let car = require("../models/cars");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    cars: "",
  });
});

module.exports = router;
