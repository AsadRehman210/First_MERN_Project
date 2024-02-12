import { useFormik } from 'formik';
import React from 'react';
import login from "../Images/login.webp"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth_store';
import { toast } from 'react-toastify';

const Login = () => {
    const {API} =useAuth()

    const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: ""
    }
    const { storeTokenInLS } = useAuth()

    const{values, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        onSubmit: async(values, action)=>{
            try {
                const response =await axios.post(`${API}/api/auth/login`, {
                    email: values.email,
                    password: values.password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const res_data =await response.data;
                storeTokenInLS(res_data.token);

                action.resetForm();
                toast.success("Submitted Successfully");
                navigate("/")

                
            } catch (err) {
                toast.error("Invalid Credentials");

                
            }

        }
    })
    return (
        <section className='login_section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-12 login_img order-lg-1 order-2'>
                        <img src={login} alt='login_image' />

                    </div>
                    <div className='col-lg-6 col-12 order-lg-2 order-1 login_content'>
                        <h3>Login Form</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 input_group">
                                <label className="form-label">Email</label>
                                <input type="email" name='email' value={values.email} onChange={handleChange} className="form-control" placeholder="Enter the Email" />
                            </div>
                            
                            <div className="mb-3 input_group">
                                <label className="form-label">Password</label>
                                <input type="password" name='password' value={values.password} onChange={handleChange} className="form-control" placeholder="Enter the Password" />
                            </div>
                            <button type='submit' className='btn btn-primary mt-3'>Login Now</button>
                        </form>


                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login;