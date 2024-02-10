const User = require("../model/user_model");
const bcrypt = require("bcryptjs")
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to home page using controller")
    } catch (error) {
        console.log(error)
    }
}

// ===============================================================================
// Registration
// ===============================================================================

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "User Already Exist" })
        }

        const userCreated = await User.create({ username, email, phone, password })

        res.status(201).json({
            message: "Registration Successfully",
            token: await userCreated.generatedToken(),
            userid: userCreated._id.toString()
        })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// ===============================================================================
// login
// ===============================================================================

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const UserExist = await User.findOne({ email: email });
        if (!UserExist) {
            return res.status(400).json({ error: "Invalid Credentials" })

        }
        const passwordCompare = await bcrypt.compare(password, UserExist.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Invalid Credentials" })

        } else {
            return res.status(200).json({
                message: "login Succeefully",
                token: await UserExist.generatedToken(),
                userId: UserExist._id.toString()

            })
        }


    } catch (error) {
        res.status(500).json({ error: "Invalid Credentials" })

    }

}

// ===============================================================================
// userInformation
// ===============================================================================

const userInformation = (req, res) => {
    try {
        const userData = req.user;
        res.status(200).json({message: userData })
    } catch (error) {
        console.log(error)

    }

}

module.exports = { home, register, login, userInformation }