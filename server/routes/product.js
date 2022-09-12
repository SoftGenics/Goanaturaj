const express =require('express');
const route=express.Router();
const multer = require('multer');
const path = require('path');
const db=require('../database/connection');
const protect = require("../middleware/verify");
const { profile } = require('console');
var fs = require('fs');

// view all
route.get('/api/allProduct',(req, res) => {
    var sql='SELECT *FROM product';
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
 
route.post('/api/addProduct', upload.single('image'), (req, res, next) => {
   const file = req.file;

   if (!file) {
      return res.status(400).send({ message: 'Please upload a file.' });
   }
   const p_name=req.body.p_name;
   const price=req.body.price;

   const image=req.file.filename;
   const category=req.body.category;
   const discount=req.body.discount;
   const waight=req.body.waight;
   const dics=req.body.dics;
   const stock=req.body.stock;
   const rating=0
   var sql= "INSERT INTO product VALUES ?";
      const values=[[null,p_name,price,category,rating,image,discount,waight,dics,stock]];
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

route.get('/api/ViewProduct/:id', (req, res) => {
   var sql='SELECT *FROM product Where id=?';
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
 
 route.put('/api/updateProduct/:id', upload.single('image'), (req, res, next) => {
   if (!req.file) {
      return res.send('Please select an image to upload');
  }
   else{
   
   const p_name=req.body.p_name;
    const price=req.body.price;
 
    const picture=req.file.filename;

   
    //const category=req.body.category;
    const rating=req.body.rating;
    const discount=req.body.discount;
   const waight=req.body.waight;
   const id=req.params.id;
   
    var sql=`UPDATE product SET p_name="${p_name}",price="${price}",rating="${rating}",image="${picture}",discount="${discount}",waight="${waight}" WHERE id="${id}"` ;
    
    db.query(sql,(err,results)=>{
        if(err) throw err
        res.send(results);
    })
   }
})
//update profile
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads');
   },
   
   filename: function (req, file, cb) {   
       cb(null, 'uploads');
       // null as first argument means no error
       cb(null, Date.now() + '-' + file.originalname )  
   }
})
let upload2 = multer({ storage: storage}).single('image');

route.put('/upload/:id',upload2, async (req, res) => {	
   try {
       // 'avatar' is the name of our file input field in the HTML form

       

      //
           // req.file contains information of uploaded file
           // req.body contains information of text fields

           if (!req.file) {
               return res.send('Please select an image to upload');
           }
           else if (err instanceof multer.MulterError) {
               return res.send(err);
           }
           else if (err) {
               return res.send(err);
           }
           const id=req.params.id;
                  
        const profile=req.file.filename;
     console.log(profile)
           const sql = `UPDATE product SET  profile="${profile}" WHERE id="${id}"`;
           db.query(sql, (err, results) => {  if (err) throw err;
           res.json({ success: 1 })      

        });  

        

   }catch (err) {console.log(err)}
})

//delete

route.delete('/api/deleteProduct/:id',(req, res) => {
   var dsql='SELECT image FROM product Where id=?';
   db.query(dsql,[req.params.id],function(err,result){
       if(err) throw err;
   console.log(result[0].image);
   var filePath = `uploads/${result[0].image}`; 
fs.unlinkSync(filePath);})

   const sql="DELETE FROM product WHERE id=?"
  db.query(sql,[req.params.id],function(err,result){
   

      if(err) throw err;
      console.log(result);


  res.send(result);});


});


module.exports = route