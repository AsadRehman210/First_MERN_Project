const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwtoken = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true
    },
    phone: {
        type:Number,
        require: true
    },
    password: {
        type:String,
        require: true
    },
    isAdmin: {
        type:Boolean,
        default: false
    }
})

// hash the password before save the data
userSchema.pre("save", async function(next){
    const user = this;
    if(!user.isModified("password")){
        next()
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;       
    } catch (error) {
        next(error)        
    }
})

// json web Token created
userSchema.methods.generatedToken = async function(){
    try {
        return jwtoken.sign({
            userID:this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.SECRET_KEY,
        {expiresIn: "30d"})
        
    } catch (error) {
        console.error(error)
        
    }

}



// Create Model
const User = new mongoose.model("User", userSchema);

module.exports = User;