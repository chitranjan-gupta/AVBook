const jwt = require('jsonwebtoken');
const Item = require('../models/item');

const authenticate = async (req,res,next) => {
    try{
        const token = req.cookies.jwtoken;
        if(!token){
            res.status(401).json({message:'Unauthorized:No token provided'});
            return;
        }
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootUser = await Item.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){
            res.json({message:"No User Found"});
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
    }catch(err){
        
    }
}

module.exports = authenticate;