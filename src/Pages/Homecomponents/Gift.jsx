/* eslint-disable no-unused-vars */
import React from 'react'
import Birthday from '../../assets/Birthday.jpg'
import './Gift.css'

const Gift = () => {
  return (
    <div>
        <div className="gift-container">
        <img src={Birthday} alt=""  className='gift-img'/>
       <div className="gift-text-left">
        <h2 className='bookings-text-container-txt'>Gift Vouchers</h2>
        <p className='long'>Incentivize your guests through offering reduced vouchers for gifts. The coupon is valued at $100, but the guest only pays $75. The guest is pleased to provide a present with a higher perceived value, and your restaurant earns a new client without losing brand equity.</p>
        <p className='short'>Our Manager app allows you to digitally track and validate gift certificates. This functionality is accessible for all plans. We charge 2% of the transaction's value.</p>
    
    </div>

</div>
    </div>
  )
}

export default Gift