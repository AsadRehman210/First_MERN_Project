import axios from 'axios'
import React, { useEffect, useState } from 'react'
import cardImage from "../Images/card.webp"
import { useAuth } from '../store/auth_store'
const Service = () => {
    const API = useAuth().API;
    const [serviceInfo, setServiceInfo] = useState([]);


    const serviceData = async () => {
        const res = await axios.get(`${API}/api/services_Data/service`);
        setServiceInfo(res.data.message)
    }
    useEffect(() => {
        serviceData()

    }, [])
    return (
        <main>
            <section className='service_section'>
                <div className='container'>
                    <h3>Services</h3>
                    <div className='row card_row'>
                        {serviceInfo.map((ele, index) => {
                            return (
                                <div className="card col-lg-4" key={ele._id}>
                                    <img src={cardImage} className="card-img-top" alt="card_image" />
                                    <div className="card-body">
                                        <div className='card_header'>
                                            <p>{ele.provider}</p>
                                            <p>{ele.price}</p>
                                        </div>
                                        <h5 className="card-title">{ele.service}</h5>
                                        <p className="card-text">{ele.description}</p>
                                    </div>
                                </div>
                            )

                        })}


                    </div>
                </div>
            </section>
        </main>
    )
}

export default Service
