import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth_store';
import { toast } from 'react-toastify';

const CreateService = () => {
    const { API, authorizationToken } = useAuth();
    const navigate = useNavigate()
    const initialValues = {
        service: "",
        description: "",
        price: "",
        provider: ""
    }
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values, action) => {
            try {
                await axios.post(`${API}/api/admin/service/created`, {
                    service: values.service,
                    description: values.description,
                    price: values.price,
                    provider: values.provider

                },{
                    headers:{
                        Authorization: authorizationToken
                    }
                })
                navigate("/admin/services");
                toast.success("Service Created Successfully")

            } catch (error) {
                toast.error("Service Record did not Created")

            }
        }

    })
    return (
        <section className='UpdateService_section'>
            <div className='container'>
                <NavLink to="/admin/services" className='btn btn-primary'>Go to Admin Service</NavLink>
                <h4>Update User Data</h4>
                <div className='row'>
                    <div className='col-5'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 input_group">
                                <label className="form-label">service</label>
                                <input type="text"
                                    name='service'
                                    value={values.service}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter the Service" required />
                            </div>

                            <div className="mb-3 input_group">
                                <label className="form-label">Description</label>
                                <input type="text"
                                    name='description'
                                    value={values.description}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter the Description" required />
                            </div>

                            <div className="mb-3 input_group">
                                <label className="form-label">Price</label>
                                <input type="text"
                                    name='price'
                                    value={values.price}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter the Price" required />
                            </div>

                            <div className="mb-3 input_group">
                                <label className="form-label">Provider</label>
                                <input type="text"
                                    name='provider'
                                    value={values.provider}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter the Provider" required />
                            </div>

                            <button type='submit' className='btn btn-primary mt-3'>Submit Now</button>
                        </form>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default CreateService
