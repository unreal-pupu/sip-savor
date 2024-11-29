/* eslint-disable no-unused-vars */
import React from 'react'
import './Reseller.css'
import WB from '../../assets/WB.jpg'

const Reseller = () => {
  return (
    <div>
      <div className="Resell-heading">
    <h1>Enhancing Dining with QR Menus: Tips and Ideas</h1>
</div>
<div className="resell-content">
    <div className="resell-left-image">
        <img src={WB} alt="" />
    </div>
    <div className="resell-right-text">
        <h2>Discover Unique Ways to Incorporate QR Menus in Your Restaurant</h2>
        <p>Effortlessly present your menu digitally, showcasing your food and drinks through stunning photos and videos. Utilize our additional features to boost sales and enhance guest satisfaction, all while offering a more personalized experience by maintaining traditional table service.</p>
    </div>
</div>
      

    </div>
  )
}

export default Reseller