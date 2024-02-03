import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSScompo/Cancle.css';

const Cancel = () => {
  return (
    <div>
      <div className='paymentCancleContainer'>
          <img src='/paymentFailed.png' />
          <NavLink to="/">
            <button>Go to Home</button>
          </NavLink>
      </div>
    </div>
  )
}

export default Cancel