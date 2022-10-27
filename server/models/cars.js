/*
'---------------------------------------------------------------'
'   Filename: server.models.cars.js                             '
'   Created by: Emander D. Dangla                               '
'   Student ID: 301245113                                       '
'   Web App: https://comp229-f22-midterm-301245113.herokuapp.com'
'   Date Created: 25/10/2022                                    '
'   Description: cars model file for Midterm Partical Test      '
'                                                               '
'---------------------------------------------------------------'
'   Modification History                                        '
'---------------------------------------------------------------'
'   Date            Developer           Modification            '
'   25/10/2022      Emander Dangla      Initial Creation        '
'---------------------------------------------------------------'*/

let mongoose = require("mongoose");

// create a model class
let Car = mongoose.Schema(
  {
    Carname: String,
    Category: String,
    Carmodel: String,
    Price: Number,
  },
  {
    collection: "cars",
  }
);

module.exports = mongoose.model("Car", Car);
