const jwt = require("jsonwebtoken");
const User = require("../model/user_model")

const authMiddleware = async(req, res, next)=>{

    const token = req.header("Authorization")
    if(!token){
       return res.status(401).json({message: "Unauthorized http request"})
    }
    const jwtoken = token.replace("Bearer", "").trim();

    try {
        const isVerified = jwt.verify(jwtoken, process.env.SECRET_KEY);

        const userData = await User.findOne({email: isVerified.email}).select({password:0});

        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next();
    } catch (error) {
        res.status(401).json({message: "Unauthorized http request"})
        
    }

}

module.exports = authMiddleware;