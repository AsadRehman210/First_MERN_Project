const {z} = require("zod")

const validatorSchema = z.object({
    username: z.string({required_error: "Name is required"}).min(3,{message: "Username must be 3 character"}).max(30,{message: "Username must not be greater than 30 character"}),

    email:z.string({required_error: "Email is required"}).trim().email({message:"Invalid Email Address"}).min(8,{message:"Email Address must be minimum 8 character"}).max(50,{message: "Email Address must not be greater than 50 character"}),

    phone: z.string({required_error: "Phone Number is required"}).trim().min(10,{message:"Phone Number must be minimum 10 character"}).max(20,{message: "Phone Number must not be greater than 20 character"}),

    password: z.string({required_error: "Password is required"}).trim().min(7,{message:"password must be minimum 7 character"}).max(50,{message: "password must not be greater than 50 character"}),
})

module.exports = validatorSchema;