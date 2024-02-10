import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth_store';
import { toast } from 'react-toastify';

const AdminContact = () => {
  const [getContact, setGetContact] = useState([]);
  const { authorizationToken, API } = useAuth();
  const getContactDetail = async () => {
    try {
      const res = await axios.get(`${API}/api/admin/contact`, {
        headers: {
          Authorization: authorizationToken
        }
      });
      const Data = res.data;
      setGetContact(Data)
      console.log(Data)

    } catch (error) {
      console.log(`Error Detail ${error}`)

    }

  }
  const DeleteMsg = async(id)=>{
    try {
      await axios.delete(`${API}/api/admin//contactDel/${id}`, {
        headers: {
          Authorization: authorizationToken
        }
      });
      getContactDetail();
      toast.success("Delete Successfully")   
    } catch (error) {
      console.log(error)     
    }
  }

  useEffect(() => {
    getContactDetail()
  }, [])
  return (
    <section className='AdminContact_section'>
      <div className='container'>
        <div className='row'>
          <h3 className='AdminContact_heading'>Admin Contact Detail</h3>
          <div className='col-12 AdminContact_table'>
            <table style={{ width: "100%" }} className='bg-light '>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>message</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {getContact.map((ele, index) => {
                  return (
                    <tr >
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                      <td>{ele.message}</td>
                      <td >
                        <button className='btn btn-outline-danger btn_table' style={{ verticalAlign: 'middle' }} onClick={()=>DeleteMsg(ele._id)} >Delete</button>
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

export default AdminContact
