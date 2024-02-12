import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth_store';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';


const UpdateService = () => {
    const { API, authorizationToken } = useAuth();
    const { id } = useParams();
    const [initInput, setInitInput] = useState({})
    const navigate = useNavigate()

    const getInitInput = async () => {
        try {
            const res = await axios.get(`${API}/api/admin/service/update/${id}`, {
                headers: {
                    Authorization: authorizationToken
                }
            })
            const Data = res.data.serviceData;
            setInitInput(Data);
        } catch (error) {
            console.log(`error ${error}`)

        }
    }
    useEffect(() => {
        getInitInput()

    }, []);

    const initialValues = {
        service: initInput.service || "",
        description: initInput.description || "",
        price: initInput.price || "",
        provider: initInput.provider || ""
    }

    const { values, handleChange, handleSubmit } = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        onSubmit: async (values, action) => {
            try {
                await axios.put(`${API}/api/admin/service/updatedCom/${id}`, {
                    ...values,
                    service: values.service,
                    description: values.description,
                    price: values.price,
                    provider: values.provider
                }, {
                    headers: {
                        Authorization: authorizationToken
                    }
                })
                action.resetForm();
                navigate(`/admin/services`)
                toast.success("Service Record Updated Successfully")

            } catch (error) {
                toast.error("Record Not Updated")

            }
        }
    })

    return (
        <section className='UpdateService_section'>
            <div className='container'>
                <NavLink to="/admin/services" className='btn btn-primary'>Go to Admin Service</NavLink>
                <h4>Update User Data</h4>
                <div className='row'>
                    <div className='col-lg-6'>
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

                            <button type='submit' className='btn btn-primary mt-3'>Updated Now</button>
                        </form>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default UpdateService;
