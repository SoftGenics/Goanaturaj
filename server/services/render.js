//const axios = require('axios');
exports.homeRoutes=(req,res)=>{
  axios.get('http://localhost:5000/api/user')
  .then(function(response){
   console.log(response)

   res.render('index',{myusers:response.data});
  
   })
   .catch(err =>{
   res.send(err);
   })

  }

//exports.add_user('/',(req,res) =>{
    //res.render('add_user');
  //  })

   // exports.update_user('/',(req,res) =>{
     //   res.render('update_user');
       //
   //  })