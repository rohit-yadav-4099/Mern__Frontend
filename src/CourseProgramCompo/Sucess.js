import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSScompo/Cancle.css';

const Success = () => {
  return (
    <div className='success-page_container'>
      <div className='success-page_container_main'>
        <div className='paymentsuccessContainer'>
          <img className='img' src='\successPayment.jpg' />
        </div>
        <div className='paymentSuccesstext'>
          <h1>Payment Success !</h1>
          <h4>Your payment has been transmitted successfully</h4>
          <NavLink to="/mycourse">
            <button>Go to Dashboard</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Success