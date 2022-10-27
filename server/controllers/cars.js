/*
'---------------------------------------------------------------'
'   Filename: server.controllers.cars.js                        '
'   Created by: Emander D. Dangla                               '
'   Student ID: 301245113                                       '
'   Web App name: https://COMP229-F2022-301245113.herokuapp.com '
'   Date Created: 25/10/2022                                    '
'   Description: cars controller file for Midterm Partical Test '
'                                                               '
'---------------------------------------------------------------'
'   Modification History                                        '
'---------------------------------------------------------------'
'   Date            Developer           Modification            '
'   25/10/2022      Emander Dangla      Initial Creation        '
'---------------------------------------------------------------'*/

// modules required for controllers
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// reference to the model (dbschema)
let Car = require("../models/cars");

// display car list
module.exports.displayCarList = (req, res, next) => {
  // find all cars in the cars collection
  Car.find((err, cars) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("cars/index", {
        title: "Cars",
        cars: cars,
      });
    }
  });
};

// display add page
module.exports.addpage = (req, res, next) => {
    res.render("cars/add", {
      title: "Add Cars",
    });
};

// process add page
module.exports.addprocesspage = (req, res, next) => {
    let newCar = Car({
      Carname: req.body.Carname,
      Category: req.body.Category,
      Carmodel: req.body.Carmodel,
      Price: req.body.Price,
    });
    Car.create(newCar, (err, Car) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh the cars list
        res.redirect("/cars");
      }
    });
};

// display edit page
module.exports.displayeditpage = (req, res, next) => {
    let id = req.params.id; //id of actual object
    Car.findById(id, (err, cartoedit) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("cars/edit", {
          title: "Edit Car",
          car: cartoedit,
        });
      }
    });
};

// process edit page
module.exports.processingeditpage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatecar = Car({
      _id: id,
      Carname: req.body.Carname,
      Category: req.body.Category,
      Carmodel: req.body.Carmodel,
      Price: req.body.Price,
    });
    Car.updateOne({ _id: id }, updatecar, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the car list
        res.redirect("/cars");
      }
    });
};

// display delete by name page
module.exports.deletepage = (req, res, next) => {
  res.render("cars/delete", {
    title: "Delete Cars",
  });
};

// process delete by name page
module.exports.deleteprocesspage = (req, res, next) => {
    Car.deleteOne({ Carname: req.body.Carname }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh car list
        res.redirect("/cars");
      }
    });
};

// process delete by price page
module.exports.deletebypricepage = (req, res, next) => {
  res.render("cars/deletebyprice", {
    title: "Delete Cars by Price",
  });
};

// process delete by price page
module.exports.deletebypriceprocesspage = (req, res, next) => {
    Car.deleteMany({ Price: { $gte : req.body.Min, $lte : req.body.Max} }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh car list
        res.redirect("/cars");
      }
    });
};