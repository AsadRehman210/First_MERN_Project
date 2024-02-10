import React from 'react';
import register from "../Images/register.webp"
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth_store';
import { registerSchema } from '../schemas';
import { toast } from 'react-toastify';

const Registration = () => {
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        email: "",
        phone: "",
        password: ""
    }

    const { storeTokenInLS, API } = useAuth();

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: registerSchema,
        onSubmit: async (values, action) => {
            try {
                const response = await axios.post(`${API}/api/auth/register`, {
                    username: values.username,
                    email: values.email,
                    phone: values.phone,
                    password: values.password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const res_data = await response.data;

                storeTokenInLS(res_data.token)
                console.log(res_data)

                action.resetForm();
                window.alert("Submitted Successfully")
                navigate("/login");

            } catch (error) {
                toast.error("Use Unique Email Address");

            }
        }
    })

    return (
        <>
            <div className='register_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 reg_image'>
                            <img src={register} alt='registration' />
                        </div>
                        <div className='col-lg-6 reg_content'>
                            <h3>Registration Form</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 input_group">
                                    <label className="form-label">Username</label>
                                    <input type="text" name='username' value={values.username} onChange={handleChange} className="form-control" onBlur={handleBlur} placeholder="Enter the Username" />
                                    {errors.username && touched.username ? <p>{errors.username}</p> : ""}
                                </div>

                                <div className="mb-3 input_group">
                                    <label className="form-label">Email</label>
                                    <input type="email" name='email' value={values.email} onChange={handleChange} className="form-control" onBlur={handleBlur} placeholder="Enter the Email" />
                                    {errors.email && touched.email ? <p>{errors.email}</p> : ""}
                                </div>

                                <div className="mb-3 input_group">
                                    <label className="form-label">Phone</label>
                                    <input type="text" name='phone' value={values.phone} onChange={handleChange} className="form-control" onBlur={handleBlur} placeholder="Enter the Phone" />
                                    {errors.phone && touched.phone ? <p>{errors.phone}</p> : ""}
                                </div>

                                <div className="mb-3 input_group">
                                    <label className="form-label">Password</label>
                                    <input type="password" name='password' value={values.password} onChange={handleChange} className="form-control" onBlur={handleBlur} placeholder="Enter the Password" />
                                    {errors.password && touched.password ? <p>{errors.password}</p> : ""}
                                </div>
                                <button type='submit' className='btn btn-primary mt-3'>Register Now</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
