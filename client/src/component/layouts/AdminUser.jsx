import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth_store'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminUser = () => {
  const { authorizationToken, API } = useAuth()
  const [userDetail, setUserDetail] = useState([]);

  const getAdminUser = async () => {
    try {
      const response = await axios.get(`${API}/api/admin/user`, {
        headers: {
          Authorization: authorizationToken
        }
      });
      const getData = response.data;
      setUserDetail(getData);

    } catch (error) {
      console.log(`Error ${error}`)

    }
  }

  // Delete User
  const deleteUser = async (id) => {
    try {
     const res = await axios.delete(`${API}/api/admin/user/delete/${id}`, {
        headers: {
          Authorization: authorizationToken
        }
      })
      const Data = res.data
      
      if (Data.message === "You are Admin"){
        toast.error("You are Admin. Don't Delete Your Self")

      }else{
        getAdminUser();
      toast.success("Delete Successfully")
      }
      

    } catch (error) {
      toast.error("Didn't Delete it. Please try again")
      console.log(error)

    }


  }





  // useEffect logic

  useEffect(() => {
    getAdminUser();

  }, [])
  return (
    <section className='AdminUser_section'>
      <div className='container'>
        <div className='row'>
          <h3 className='AdminUser_heading'>Admin User Detail</h3>
          <div className='col-12 AdminUser_table'>
            <table style={{ width: "100%" }} className='bg-light '>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {userDetail.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                      <td>{ele.phone}</td>
                      <td >
                        <Link to={`/admin/userUpdate/${ele._id}`} className='btn btn-outline-danger btn_table' style={{ verticalAlign: 'middle' }} >Update</Link >
                      </td>
                      <td >
                        <button className='btn btn-outline-danger btn_table' style={{ verticalAlign: 'middle' }} onClick={() => deleteUser(ele._id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminUser
