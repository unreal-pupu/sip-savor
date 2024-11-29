/* eslint-disable no-unused-vars */
import React from 'react'
import './Good.css'
import Gdeli from '../../assets/Gdeli.jpg'

const Good = () => {
  return (
    <>
     <div className='good-menu'>
         <div className="good-container">
        <div className="good-content">
            <h2 className='bookings-text-container-txt'>Online Delivery & Pick-up Menu  with flexible commission!</h2>
            <p>Reduce your reliance on delivery channel partners and begin taking direct online delivery and takeout orders. Create a distinct delivery menu than your dine-in menu, link it to your website, and post it on social media!</p>
        </div>
        <div className="good-image">
            <img src={Gdeli} alt=""  className='good-img'/>
           
        </div>
    </div>
    </div>

    </>
  )
}

export default Good