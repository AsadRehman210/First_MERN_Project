import React from 'react';
import { NavLink } from 'react-router-dom';
import welcome from "../Images/welcome.webp";
import helpImage from "../Images/home.webp"
import Analytical from '../component/Analytical';

const Home = () => {
    return (
        <main>
            <section className='home_section'>
                <div className='container'>
                    <div className='row welcome_home'>
                        <div className='col-lg-6 welcome_content'>
                            <p>We are the World best IT Company</p>
                            <h1>Welcome to Asad Rehman</h1>
                            <p className='para'>Are you ready to take your business to the next level with cutting-edge IT solutions?Look no further!Mr. Asad Rehman, i am specializ in providing innovative IT services and solutions tailored to meet your unique needs</p>
                            <div className='button'>
                                <NavLink to="/contact" className="btn btn-primary btn1">Contact Us</NavLink>
                                <NavLink to="/service" className="btn btn-outline-primary btn2">Learn More</NavLink>
                            </div>

                        </div>
                        <div className='col-lg-6 welcome_image'>
                            <img src={welcome} alt='Welcome_image' />
                        </div>

                    </div>
                </div>
            </section>
            <Analytical />

            <section className='start_section'>
                <div className='container'>
                    <div className='row start_detail'>
                        <div className='col-lg-6 start_img'>
                        <img src={helpImage} alt='help_img' />

                        </div>
                        <div className='col-lg-6 start_content'>
                            <p>We are here to help you</p>
                            <h3>Get Started today</h3>
                            <p className='para'>Ready to take the first step towards a more efficient and secure IT infrastructure? contact us for a free consultation and let's discuss How Mr. Asad Rehman can help your business thrive in digital age</p>
                            <div className='button'>
                                <NavLink to="/contact" className="btn btn-primary btn1">Contact Us</NavLink>
                                <NavLink to="/service" className="btn btn-outline-primary btn2">Learn More</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
