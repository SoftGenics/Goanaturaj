const jwt=require('jsonwebtoken');
module.exports=function(req,res,next){
    const token=req.header('auth-token');
    if(!token)return res.status(404).send('Asses denied')
    try{
        const verified=jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user=verified;
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token')
    }
}