/* eslint-disable no-unused-vars */
import React from 'react'
import './Save.css'

const Save = () => {
  return (
    <div>
         <div className="paymentbtn-container">
    <button className="pay-monthly">Pay Monthly</button>
    <button className="pay-yearly">
      Pay Yearly
      <span className="savings-icon" title="Save 20%!">💰</span>
    </button>
  </div>
    </div>
  )
}

export default Save