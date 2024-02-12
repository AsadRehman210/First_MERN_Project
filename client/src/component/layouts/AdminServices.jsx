import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../store/auth_store';
import { toast } from 'react-toastify'
import { Link, NavLink } from 'react-router-dom';

const AdminServices = () => {
  const { API, authorizationToken } = useAuth();
  const [getService, setGetService] = useState([])

  const getServiceInfo = async () => {
    try {
      const res = await axios.get(`${API}/api/admin/service`, {
        headers: {
          Authorization: authorizationToken
        }
      });
      const Data = res.data.serviceData
      setGetService(Data)


    } catch (error) {
      console.log(error)

    }

  }

  const deleteService = async (id) => {
    try {
      await axios.delete(`${API}/api/admin/deleteService/${id}`, {
        headers: {
          Authorization: authorizationToken
        }
      })
      // console.log(res.data)
      getServiceInfo();
      toast.success("Deleted Successfully")
    } catch (error) {
      toast.error("Didn't Delete. Please try again")
      console.log(`error ${error}`)

    }
  }

  useEffect(() => {
    getServiceInfo()

  }, [])
  return (
    <section className='adminServices_section'>

      <div className='container'>
        <div className='row'>
          <div className='service_header'>
            <h3 className='AdminService_heading d-inline'>Admin Services</h3>
            <NavLink to="/admin/createService" className="btn btn-primary d-inline">Create Service</NavLink>
          </div>

          <div className='col-12 AdminService_table'>
            <table style={{ width: "100%" }} className='bg-light '>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Provider</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {getService.map((ele, index) => {
                  return (
                    <tr key={ele._id}>
                      <td>{ele.service}</td>
                      <td>{ele.description}</td>
                      <td>{ele.price}</td>
                      <td>{ele.provider}</td>
                      <td >
                        <Link to={`/admin/updateService/${ele._id}`} className='btn btn-outline-danger btn_table' >Update</Link>
                      </td>
                      <td >
                        <button className='btn btn-outline-danger btn_table' onClick={() => deleteService(ele._id)} >Delete</button>
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

export default AdminServices
