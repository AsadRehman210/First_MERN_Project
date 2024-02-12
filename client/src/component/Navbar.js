import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth_store'

const Navbar = () => {
    const {isLoggedIn} = useAuth();

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-light nav_bar">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">MERN DEVELOPER</NavLink>
                        <button className="navbar-toggler shadow-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start w-50 " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header border-bottom border-black border-3">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MERN DEVELOPER</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                    <li className="nav-item ">
                                        <NavLink className="nav-link " to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link " to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link " to="/service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link " to="/contact">Contact</NavLink>
                                    </li>
                                    {isLoggedIn? <li className="nav-item">
                                        <NavLink className="nav-link " to="/logout">Logout</NavLink>
                                    </li> : <> <li className="nav-item">
                                        <NavLink className="nav-link " to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link " to="/register">Register</NavLink>
                                    </li></>}

                                    <li className="nav-item">
                                        <NavLink className="nav-link " to="/admin/user">Admin</NavLink>
                                    </li>
                                    
                                    
                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;