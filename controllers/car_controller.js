const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const cars = require("../model/car_model");

// router.get("cars/new", (req, res)=>{
//     res.render('new.ejs')
// })