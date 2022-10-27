/*
'---------------------------------------------------------------'
'   Filename: server.routes.cars.js                             '
'   Created by: Emander D. Dangla                               '
'   Student ID: 301245113                                       '
'   Web App: https://comp229-f22-midterm-301245113.herokuapp.com'
'   Date Created: 25/10/2022                                    '
'   Description: cars routes file for Midterm Partical Test     '
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

// define the car model
//let car = require("../models/cars");

let carsController = require("../controllers/cars");

/* GET cars List page. READ */
router.get("/", carsController.displayCarList);

//  GET the Car Details page in order to add a new Car
router.get("/add", carsController.addpage);

// POST process the Car Details page and create a new Car  - CREATE
router.post("/add", carsController.addprocesspage);

// GET the Car Details page in order to edit an existing Car
router.get("/edit/:id", carsController.displayeditpage);

// POST - process the information passed from the details form and update the document
router.post("/edit/:id", carsController.processingeditpage);

//  GET the delete page in order to delete a new Car
router.get("/delete", carsController.deletepage);

// POST process the delete page to delete a Car
router.post("/delete", carsController.deleteprocesspage);

// GET the delete page in order to delete a new Car
router.get("/deletebyprice", carsController.deletebypricepage);

// POST process the delete page to delete a Car
router.post("/deletebyprice", carsController.deletebypriceprocesspage);

module.exports = router;
