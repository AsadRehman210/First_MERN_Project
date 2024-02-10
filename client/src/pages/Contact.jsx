import React from 'react';
import { useFormik } from 'formik'
import contactImg from "../Images/contact.webp"
import axios from 'axios';
import { useAuth } from '../store/auth_store';
import GoogleMap from '../component/GoogleMap';

const Contact = () => {
    const { user,API } = useAuth();


    const initialValues = {
        username: user.message?.username || "",
        email: user.message?.email || "",
        message: ""
    }

    const { values, handleChange, handleSubmit } = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        onSubmit: async (values, action) => {
            try {
                await axios.post(`${API}/api/form/contact`, {
                    username: values.username,
                    email: values.email,
                    message: values.message,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                action.resetForm();
                window.alert("Submitted Successfully")

            } catch (error) {

            }

        }
    })
    return (
        <main>
            <section className='contact_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 contact_img'>
                            <img src={contactImg} alt='contact_image' />

                        </div>
                        <div className='col-lg-6 contact_content'>
                            <h3>Contact Form</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 input_group">
                                    <label className="form-label">Username</label>
                                    <input type="text" name='username' value={values.username} onChange={handleChange} className="form-control" placeholder="Enter the Username" />
                                </div>

                                <div className="mb-3 input_group">
                                    <label className="form-label">Email</label>
                                    <input type="email" name='email' value={values.email} onChange={handleChange} className="form-control" placeholder="Enter the Email" />
                                </div>

                                <div className="mb-3 input_group">
                                    <label className="form-label">Message</label>
                                    <textarea type="text" name='message' value={values.message} onChange={handleChange} className="form-control" placeholder="Message" rows="3"></textarea>
                                </div>


                                <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                            </form>


                        </div>
                    </div>
                </div>

            </section>

            <GoogleMap />

        </main>
    )
}

export default Contact
