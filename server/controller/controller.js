const db=require('../database/connection');
const multer = require('multer');
const path = require('path');
const { kStringMaxLength } = require('buffer');
const { brotliDecompress } = require('zlib');

//msg of the day




    // vidate request
//update
exports.update=(req,res)=>{

}
//delete
exports.h_delete=(req,res)=>
{
const sql="DELETE FROM hair WHERE id=?"
   db.query(sql,[req.params.id],function(err,result){
       if(err) throw err;
       console.log(result);


   res.send(result);});
   }
//CP delete
exports.f_delete=(req,res)=>
{
const sql="DELETE FROM facial WHERE id=?"
   db.query(sql,[req.params.id],function(err,result){
       if(err) throw err;
       console.log(result);


   res.send(result);});
   }







