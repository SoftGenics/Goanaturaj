const express =require('express');
const route=express.Router();
const controller=require('../controller/controller');
const multer = require('multer');
const path = require('path');
const db=require('../database/connection');
const { hasSubscribers } = require('diagnostics_channel');


// all hair
route.get('/api/allBridal', (req, res) => {
    var sql='SELECT *FROM bridal';
    db.query(sql,function(err,result){
        if(err) throw err;
    res.send(result);});
 }
 );
 // handle storage using multer
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
 route.post('/api/addBridalProduct', upload.single('picture'), (req, res, next) => {
   const file = req.file;
 
   if (!file) {
      return res.status(400).send({ message: 'Please upload a file.' });
   }
   const p_name=req.body.p_name;
   const picture=req.file.filename;
   const disc=req.body.price;
   
   const price=req.body.price;
   const category=req.body.category;
  
 
   
   var sql= "INSERT INTO bridal VALUES ?";
      const values=[[null,p_name,picture,disc,price,category]];
      console.log(values);
      db.query(sql,[values], (err, results,fields)=>{
          if(err){
          console.log(err) }
          {
              console.log("inserted",results )
              res.redirect('http://localhost:3000')
              res.end();
          }
      })
 }) 

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
  
  route.put('/api/updateBridal/:id', upload.single('picture'), (req, res, next) => {
    const p_name=req.body.p_name;
   const picture=req.file.filename;
   const disc=req.body.price;
   
   const price=req.body.price;
   const category=req.body.category;
  
    
    
    const id=req.params.id;
     var sql=`UPDATE Bridal SET p_name="${p_name}",disc="${disc}",price="${price}",category="${category}" WHERE id="${id}"` ;
     
     db.query(sql,(err,results)=>{
         if(err) throw err
         res.send(results);
     })
 })


// delete
route.delete('/api/deletehairProduct/:id',(req, res) => {

    const sql="DELETE FROM bridal WHERE id=?"
   db.query(sql,[req.params.id],function(err,result){
       if(err) throw err;
       console.log(result);


   res.send(result);});


}); 
module.exports = route