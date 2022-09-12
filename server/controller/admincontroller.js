

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const db=require('../database/connection');

const { Route } = require('express');

exports.user=(req,res)=>{
   const  email = req.body.email;
   const password=bcrypt.hashSync(req.body.password, 8);


    if(!req.body){
      res.status(400).send({message:"content can not be empty"});
        return;
    }
   db.query("SELECT * FROM AdminTable WHERE email = ? ", [email], function(error, results, fields) {
      if (error) {
        res.status(500).send({ message: error });
        return;
      }
      if (!results) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      else
      {
     
      var sql= "INSERT INTO AdminTable VALUES ?";
      const values=[[null,email,password]];
      console.log(values);
      db.query(sql,[values], (err, results,fields)=>{
          if(err){
          console.log(err) }
          {
              console.log("inserted",results )
              
              res.end();
          }
      })


}})}
    
     //process.env.JWT_SECRET_KEY
      exports.loginA=(request, response)=> {
        // Capture the input fields
        let email = request.body.email;
        let password = request.body.password;
      
        db.query("SELECT * FROM AdminTable WHERE email = ? ", [email], function(error, results, fields) {
          if (results[0].password) {
            bcrypt.compare(request.body.password, results[0].password, function(err, result) {
             console.log('>>>>>> ', password)
             console.log('>>>>>> ', results[0].password)
             if(result) {
              const token = jwt.sign({ id: results.id }, process.env.JWT_KEY, {
                expiresIn: 86400, // 24 hours
              });
            
            
          
            //srequest.session.token = token;
            return response.status(200).send({
             
              token: token,
              
        
            });
             }
             else {
               return response.status(400).send();
             }
           })
          }
        });
      
      }





    // vidate request
//update
exports.update=(req,res)=>{

}
//delete
exports.delete=(req,res)=>
{

}
