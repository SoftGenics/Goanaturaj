const express =require('express');
const route=express.Router();
const controller=require('../controller/controller');
const multer = require('multer');
const path = require('path');
const db=require('../database/connection');
const { hasSubscribers } = require('diagnostics_channel');

// view all
route.get('/api/allWaxing', (req, res) => {
    var sql='SELECT *FROM waxing';
    db.query(sql,function(err,result){
        if(err) throw err;
    res.send(result);});
}
);
// Add 
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads');
   },
   filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
   }
});
 
var upload = multer({ storage: storage });
 
route.post('/api/addWaxingProduct', upload.single('picture'), (req, res, next) => {
   const file = req.file;

   if (!file) {
      return res.status(400).send({ message: 'Please upload a file.' });
   }
   const p_name=req.body.p_name;
   const price=req.body.price;
   const picture=req.file.filename;
   const category=req.body.category;
   var sql= "INSERT INTO waxing VALUES ?";
      const values=[[null,p_name,picture,price,category]];
      console.log(values);
      db.query(sql,[values], (err, results,fields)=>{
          if(err){
          console.log(err) }
          {
              console.log("inserted",results )
              
              res.end();
          }
      })
}) 

//single View

route.get('/api/ViewhairProduct/:id', (req, res) => {
   var sql='SELECT *FROM waxing Where id=?';
   db.query(sql,[req.params.id],function(err,result){
       if(err) throw err;
   res.send(result);});
}
); 


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
 
 route.put('/api/updateWaxing/:id', upload.single('picture'), (req, res, next) => {
   const p_name=req.body.p_name;
   const price=req.body.price;
   const picture=req.file.filename;
   const category=req.body.category;
   
   
   const id=req.params.id;
    var sql=`UPDATE waxing SET p_name="${p_name}",price="${price}",category="${category}" WHERE id="${id}"` ;
    
    db.query(sql,(err,results)=>{
        if(err) throw err
        res.send(results);
    })
})

// delete
route.delete('/api/deleteWaxingProduct/:id',(req, res) => {

    const sql="DELETE FROM waxing WHERE id=?"
   db.query(sql,[req.params.id],function(err,result){
       if(err) throw err;
       console.log(result);


   res.send(result);});


});














  


     module.exports = route