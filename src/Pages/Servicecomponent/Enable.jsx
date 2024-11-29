/* eslint-disable no-unused-vars */
import React from 'react'
import './Enable.css'
import WEM from '../../assets/WEM.jpg'
import WC from '../../assets/WC.jpg'

const Enable = () => {
  return (
    <div>
        <div className="enable-content">
    <div className="enable-image-section">
        <img src={WEM} alt="" />
    </div>
    <div className="enable-text-section">
        <h1>Enable order requests</h1>
        <p>Our platform generates distinct QR codes based on table number, room number, or sunbed location, making ordering effortless for your guests. They can simply access the digital menu and place orders without needing assistance from busy staff. Orders are sent directly to your order panel, printer, or POS, with clear identification of the table, room, or sunbed they’re coming from, ensuring seamless service.</p>
    </div>
</div>
    </div>
  )
}

export default Enable