
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser=require('body-parser');
const path = require('path');
const cors = require("cors");
const multer = require('multer');
const imgRoute=express.Router();
const db=require('./server/database/connection');
const { result } = require('lodash');

app.use(cors({origin:"*"}));
app.use(express.json())
dotenv.config({path:'config.env'}
)
const PORT=process.env.PORT||8080

//log request
app.use(morgan("tiny"));

// body parser
app.use(bodyparser.urlencoded({extended:true}))

app.use('/uploads', express.static('uploads'));
  










// set view engine
app.set("view engine","ejs")
app.use("views",express.static(path.join(__dirname,"/views")))
//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/',require('./server/routes/hair'))
app.use('/',require('./server/routes/facial'))
app.use('/',require('./server/routes/manicure'))
app.use('/',require('./server/routes/bridal'))
app.use('/',require('./server/routes/waxing'))
app.use('/',require('./server/routes/package'))
//app.use('/',require('./server/uploadphoto/image'))
app.listen(5000, () =>{console.log(`server is running on http://localhost:${PORT}`)});