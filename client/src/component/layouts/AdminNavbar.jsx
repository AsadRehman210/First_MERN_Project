import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserTie } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaHome } from "react-icons/fa";


const AdminNavbar = () => {
    return (
        <section className='admin_nav_section'>
            <nav className="navbar navbar-expand-lg navbar-light flex-column ">
                <h4 className='db_heading'>DashBoard</h4>
                <div className="container-fluid">
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> DashBoard
                        <span className="navbar-toggler-icon ms-3"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    <div>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5 flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/user"> <FaUserTie /> User</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/contact"><MdOutlineContacts />Contact</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/services"><GrServices />Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/"><FaHome /> Home</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </section>
    )
}

export default AdminNavbar
