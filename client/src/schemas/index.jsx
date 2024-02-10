import * as Yup from "yup"

export const registerSchema = Yup.object({
    username:Yup.string().min(2).max(32).required("Please Enter your Name"),
    email:Yup.string().email().required("Please Enter Your Valid Email"),
    phone:Yup.string().matches(/^\d+$/, "Phone number must contain only digits").min(11, "Phone number must be at least 11 digits").max(20, "Phone number must not be exceed 20 digits").required("Please Enter your Mobile Number"),
    password:Yup.string().min(7).required("Please Enter your Password")
})