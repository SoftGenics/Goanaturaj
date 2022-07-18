const express =require('express');
const route=express.Router();
const controller=require('../controller/controller');
const multer = require('multer');
const path = require('path');
const db=require('../database/connection');
const { hasSubscribers } = require('diagnostics_channel');

// view all
route.get('/api/allPackage', (req, res) => {
    var sql='SELECT *FROM package';
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
 
route.post('/api/addPackageProduct', upload.single('picture'), (req, res, next) => {
   const file = req.file;

   if (!file) {
      return res.status(400).send({ message: 'Please upload a file.' });
   }
   const p_name=req.body.p_name;
   const disc=req.body.disc;
   const price=req.body.price;
  

   const picture=req.file.filename;
   var sql= "INSERT INTO package VALUES ?";
      const values=[[null,p_name,disc,price,picture]];
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

route.get('/api/ViewPackageProduct/:id', (req, res) => {
   var sql='SELECT *FROM hair Where id=?';
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
 
 route.put('/api/updateHair/:id', upload.single('picture'), (req, res, next) => {
   const p_name=req.body.p_name;
   const disc=req.body.disc;
   const price=req.body.price;
  

   const picture=req.file.filename;
   
   
   const id=req.params.id;
    var sql=`UPDATE package SET p_name="${p_name}",disc="${disc}",price="${price}" WHERE id="${id}"` ;
    
    db.query(sql,(err,results)=>{
        if(err) throw err
        res.send(results);
    })
})

// delete
route.delete('/api/deletepackageProduct/:id',(req, res) => {

    const sql="DELETE FROM waxing WHERE id=?"
   db.query(sql,[req.params.id],function(err,result){
       if(err) throw err;
       console.log(result);


   res.send(result);});


});














  

     module.exports = route