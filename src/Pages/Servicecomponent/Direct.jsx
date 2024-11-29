/* eslint-disable no-unused-vars */
import React from 'react'
import './Direct.css'
import WC from '../../assets/WC.jpg'

const Direct = () => {
  return (
      <>
      <div className="direct-content">
    <div className="direct-image-section">
        <img src={WC} alt="" />
    </div>
    <div className="direct-text-section">
        <h1>Enable seamless ordering and payment</h1>
        <p>In addition to receiving orders from your guests, our platform allows you to collect payments directly into your Stripe, 2Checkout, or Checkout account. If the services mentioned above are not available in your area, you can still use our internal My Menu Pay to process online payments!</p>
    </div>
    </div>

      </>
  )
}

export default Direct