/* eslint-disable no-unused-vars */
import React from 'react'
import './Photov.css'
import PG from '../../../assets/PG.jpg'

const Potohire = () => {
  return (
    <div className="v-container">
  <div className="v-text-content">
    <h1>Delicious Food Photography</h1>
    <ul>
        <li>Enjoy affordable, fixed pricing for high-quality food photography or combined food photography and videography</li>
        <li>With our pay-per-menu-item approach, you’re billed by each dish rather than by the hour.</li>
        <li>Your quoted price covers post-editing and uploading your images and videos directly to your menu.</li>
    </ul>
  </div>
  <div className="v-image">
    <img src={PG} alt="" />
  </div>
</div>
  )
}

export default Potohire