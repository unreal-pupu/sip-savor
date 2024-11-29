/* eslint-disable no-unused-vars */
import React from 'react'
import './QR.css'
import WG from '../../assets/WG.jpg'

const QR = () => {
  return (
    <div>
      <div className="qr-container">
    <div className="qr-text-content">
        <h1>Ready to dive into a world of flavors? Explore Our Menu Instantly!</h1>
        <p>Discover our latest dishes and daily specials. Simply scan the QR code to explore the full menu!</p>
    </div>
    <div className="qr-image-content">
        <img src={WG} alt="" />
    </div>
</div>
    </div>
  )
}

export default QR