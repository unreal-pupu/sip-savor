/* eslint-disable no-unused-vars */
import React from 'react'
import './Sip.css'
import Pawpaw from '../../assets/Pawpaw.jpg'

const Sip = () => {
  return (
    <>
     <div className='bar-menu'>
          <div className="bar-container">
        <div className="bar-content">
            <h2 className='bookings-text-container-txt'>Explore Our Exclusive Bar Menu</h2>
            <p>Indulge in our carefully curated selection of cocktails, mocktails, and premium spirits. Whether you're in the mood for a classic martini, a refreshing mojito, or a handcrafted mocktail, we’ve got the perfect drink to suit your taste. Join us at the bar for a vibrant experience!</p>
        </div>
        <div className="bar-image">
            <img src={Pawpaw} alt=""  className='bar-img'/>
           
        </div>
    </div>

    </div>

    </>
  )
}

export default Sip