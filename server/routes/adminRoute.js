const express =require('express');
const route=express.Router();
//const controller=require('../controller/controller');
const path = require('path');
const bodyparser=require('body-parser');
var fs= require('fs');
//const { authJwt } = require("../middleware");
const controller = require("../controller/admincontroller");
//const { protect } = require('../middleware/middile')









route.post('/api/admin',controller.user);


route.post('/api/adminlogin',controller.loginA);


//





     module.exports = route