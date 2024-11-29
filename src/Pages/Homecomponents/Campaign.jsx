/* eslint-disable no-unused-vars */
import React from 'react'
import Campign from '../../assets/Campign.jpg'
import './Campaign.css'

const Campaign = () => {
  return (
    <div>
    <div className="Camp-container">
  <div className="Camp-text-content">
    <h2 className='bookings-text-container-txt'>Maximize Your Revenue with Targeted Campaigns</h2>
    <p>Take your business to the next level by running well-planned campaigns designed to engage your customers and increase sales. Whether you're promoting new products, offering discounts, or launching seasonal sales, campaigns can make a huge impact.</p>
    <p>With the right strategy, you can attract new customers, retain existing ones, and boost your bottom line. Start running campaigns that connect with your audience and drive conversions today!</p>
  </div>
  <div className="camp-image-content">
    <img src={Campign} alt="" />
  </div>
</div>
    </div>
  )
}

export default Campaign