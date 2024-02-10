import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <main>
      <section className='Error_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 err_content'>
              <p className='err_404'>404</p>
              <h4>Sorry! Page Not Found</h4>
              <p className='para'>Oops! It seems like the page you're looking for has taken a detour. Please check the URL or navigate back to explore more. If you need assistance, feel free to visit our homepage or contact our support team. We apologize for any inconvenience.</p>
              <div className='button'>
                <NavLink to="/" className="btn btn-primary btn1">Go To HomePage</NavLink>
                <NavLink to="/contact" className="btn btn-outline-primary btn2">Report Problem</NavLink>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Error
