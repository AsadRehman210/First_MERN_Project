const adminMiddleware = async (req, res, next) => {
    try {
        const adminVerfiy = req.user.isAdmin;
        if(!adminVerfiy){
            return res.status(403).json({message: "User is not a Admin"})
        }
        next();

    } catch (error) {
        res.status(400).json({message: error})

    }

}

module.exports = adminMiddleware;