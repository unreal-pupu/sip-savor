/* eslint-disable no-unused-vars */
import React from 'react'
import './Currency.css'
import WJ from '../../assets/WJ.jpg'

const Currency = () => {
  return (
    <div>
        <div className="currency-content">
    <div className="currency-text-section">
        <h1>Multiple Languages & Currencies</h1>
        <p> Your digital menu can support over 140 languages on both the Tablet Menu and QR Menu The backend user panel of My Menu supports more than 30 languages. If you need any additional languages, feel free to let us know!</p>
    </div>
    <div className="currency-image-section">
        <img src={WJ} alt="" />
    </div>
</div>
    </div>
  )
}

export default Currency