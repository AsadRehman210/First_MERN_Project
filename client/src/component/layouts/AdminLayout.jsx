import React from 'react';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { useAuth } from '../../store/auth_store';


const AdminLayout = () => {
  const { isLoading, user } = useAuth();
  
  if (isLoading) {
    return <h1>Please wait.Loading...</h1>
  }

  if (!user.message?.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/admin/user"> <FaUserTie /> User</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/contact"><MdOutlineContacts />Contact</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/services"><GrServices />Service</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <Outlet />
    </>

  )
}

export default AdminLayout
