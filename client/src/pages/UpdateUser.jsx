import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../store/auth_store';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    const [inputValue, setInputValue] = useState({})
    const { authorizationToken, API } = useAuth()

    const { id } = useParams()
    const navigate = useNavigate()
    const getUpdationData = async () => {
        try {
            const res = await axios.get(`${API}/api/admin/user/update/${id}`, {
                headers: {
                    Authorization: authorizationToken
                }
            })
            const Data = res.data.updatedUser
            setInputValue(Data)

        } catch (error) {
            console.log(`Error ${error}`)

        }
    }
    useEffect(() => {
        getUpdationData()
    }, [id]);

    const initialValues = {
        username: inputValue.username || "",
        email: inputValue.email || "",
        phone: inputValue.phone || ""
    }


    const { values, handleChange, handleSubmit } = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        onSubmit: async (values, action) => {
            try {
                await axios.put(`${API}/api/admin/user/updatedcom/${id}`, {
                    ...values,
                    username: values.username,
                    email: values.email,
                    phone: values.phone
                }, {
                    headers: {
                        Authorization: authorizationToken
                    }
                })

                navigate("/admin/user");
                toast.success("Updated Successfully")

            } catch (error) {
                console.log(`Updation error ${error}`)
                toast.error("Updation Failed")

            }

        }

    })
    return (
        <section className='updateUser_section'>
            <div className='container'>
                <NavLink to="/admin/user" className='btn btn-primary'>Go to Admin Service</NavLink>
                <h4>Update User Data</h4>
                <div className='row'>
                    <div className='col-5'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 input_group">
                                <label className="form-label">Username</label>
                                <input type="text"
                                    name='username'
                                    value={values.username}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter the Name" required />
                            </div>

                            <div className="mb-3 input_group">
                                <label className="form-label">Email</label>
                                <input type="email"
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter the Email" required />
                            </div>

                            <div className="mb-3 input_group">
                                <label className="form-label">Phone</label>
                                <input type="text"
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter the Phone Number" required />
                            </div>

                            <button type='submit' className='btn btn-primary mt-3'>Updated Now</button>
                        </form>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default UpdateUser
