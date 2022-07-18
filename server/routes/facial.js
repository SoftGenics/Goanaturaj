const express =require('express');
const route=express.Router();
const controller=require('../controller/controller');
const multer = require('multer');
const path = require('path');
const db=require('../database/connection');
const { hasSubscribers } = require('diagnostics_channel');

// cencernby
route.get('/api/allfacialProduct', (req, res) => {
    var sql='SELECT *FROM facial';
    db.query(sql,function(err,result,fields){
        if(err) throw err;
        console.log(result);
 
 
    res.send(result);});
 });
 // view all product by cencern
 var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads');
   },
   filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
   }
 });
 
 var upload = multer({ storage: storage });
 
 // handle single file upload
 route.post('/api/addfacialProduct', upload.single('picture'), (req, res, next) => {
   const file = req.file;
 
   if (!file) {
      return res.status(400).send({ message: 'Please upload a file.' });
   }
   const p_name=req.body.p_name;
  
   const price =req.body.price;
   const picture=req.file.filename;
   var sql= "INSERT INTO facial VALUES ?";
      const values=[[null,p_name,price,picture]];
      console.log(values);
      db.query(sql,[values], (err, results,fields)=>{
          if(err){
          console.log(err) }
          {
              console.log("inserted",results )
              res.redirect('http://localhost:3000/FacialAndCleanUp')
              res.end();
          }
      })
 }) 
 
 //many and pady
 // cencernby
 route.get('/api/allMani&PadiProduct', (req, res) => {
    var sql='SELECT *FROM mani&padi';
    db.query(sql,function(err,result,fields){
        if(err) throw err;
        console.log(result);
 
 
    res.send(result);});
 });


 //update
 
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
  });
  
  var upload = multer({ storage: storage });
  
  route.put('/api/updateHair/:id', upload.single('picture'), (req, res, next) => {
   const p_name=req.body.p_name;
  
   const price =req.body.price;
   const picture=req.file.filename;
    
    
    const id=req.params.id;
     var sql=`UPDATE facial SET p_name="${p_name}",price="${price}" WHERE id="${id}"` ;
     
     db.query(sql,(err,results)=>{
         if(err) throw err
         res.send(results);
     })
 })
 module.exports = route