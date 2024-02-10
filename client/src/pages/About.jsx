import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import aboutImage from "../Images/about.webp"
import Analytical from '../component/Analytical';
import helpImg from "../Images/help.webp"
import { useAuth } from '../store/auth_store';

const About = () => {
    const {user} = useAuth();
    const [aboutShow, setAboutShow] = useState(false)
    const learnMore = ()=>{
        setAboutShow(!aboutShow)
    }
    return (
        <main >
            <section className='about_section'>
                <div className='container'>
                    <div className='row choose_about'>
                        <div className='col-lg-6 choose_content'>
                            <p>Welcome! {user? user.message?.username : "Here" }</p>
                            <h2>Why Choose Us?</h2>
                            <p className='para'>Elevate your business with Mr.Asad Rehman, a leading IT solutions provider. Experience cutting-edge technology, personalized solutions, and a proven track record of success. Our expert team is committed to your unique needs, ensuring unparalleled support and continuous innovation for lasting digital excellence. Choose us for a collaborative partnership focused on your success.</p>
                            {aboutShow? (<><p className='para mt-4'> <strong>Cutting-Edge Solutions:</strong> Stay ahead with our innovative technology solutions.</p>
                            
                            <p className='para mt-3'> <strong>Proven Success:</strong> Trust our track record of successful projects and satisfied clients.</p>
                            <p className='para mt-3'> <strong>Tailored Solutions:</strong> Customized services to meet your unique business needs.</p>

                            <p className='para mt-3'> <strong>Expert Team:</strong> Highly skilled professionals dedicated to delivering excellence.</p>
                            <p className='para mt-3'> <strong>Client-Centric Approach:</strong> Your success is our priority through communication and collaboration.</p>
                            <p className='para mt-3'> <strong>Continuous Innovation:</strong> Stay ahead with our commitment to ongoing learning and innovation.</p>
                            <p className='para mt-3'> <strong>Unparalleled Support:</strong> We don't just deliver – we're here for you with exceptional customer support.</p></>): ""}
                            

                            <div className='button'>
                                <NavLink to="/contact" className="btn btn-primary btn1">Contact Us</NavLink>
                                <button className="btn btn-outline-primary btn2" onClick={learnMore}>{aboutShow? "Learn Less": "Learn More"}</button>
                            </div>

                        </div>
                        <div className='col-lg-6 choose_image'>
                            <img src={aboutImage} alt='about_image' />
                        </div>

                    </div>
                </div>
            </section>

            <Analytical />

            <section className='start_section'>
                <div className='container'>
                    <div className='row start_detail'>
                        <div className='col-lg-6 start_img'>
                        <img src={helpImg} alt='help_img' />

                        </div>
                        <div className='col-lg-6 start_content'>
                            <p>We are here to help you</p>
                            <h3>Get the Support You Need</h3>
                            <p className='para'>For any queries or assistance, navigate to our Contact Page. Our comprehensive help resources provide answers to common questions, while our dedicated support team is ready to address personalized inquiries. We prioritize user satisfaction and aim to provide swift and effective assistance. Your feedback matters – reach out to us for a seamless and responsive support experience.</p>
                            <div className='button'>
                                <NavLink to="/contact" className="btn btn-primary btn1">Contact Us</NavLink>
                                <NavLink to="/" className="btn btn-outline-primary btn2">Learn More</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default About
