import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../store/auth_store';
import { toast } from 'react-toastify';
import AdminNavbar from './AdminNavbar';


const AdminLayout = () => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <h1>Please wait.Loading...</h1>
  }

  if (!user.message?.isAdmin) {
    toast.error("You are not Admin");
    toast.clearWaitingQueue();
    return <Navigate to="/" />;
  }

  return (
    <>
      <section className='AdminLayout_section'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-2 admin_nav_section'>
              <AdminNavbar />
            </div>
            <div className='col-10 '>
              <Outlet />

            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default AdminLayout
