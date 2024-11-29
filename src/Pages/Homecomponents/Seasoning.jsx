/* eslint-disable no-unused-vars */
import React from 'react'
import Spice from '../../assets/Spice.jpg'
import './Seasoning.css'

const Seasoning = () => {
  return (
      <>
       <div className="seasoning-container">
    <div className="season-text-content">
    <h4>Discover the Flavors of Fresh Spices!</h4>
    <p>At Sip&savor, we believe that the secret to extraordinary dishes lies in the artful use of spices. Our chefs carefully select the finest herbs and spices from around the world to create bold, aromatic flavors that bring every dish to life. Whether it’s a pinch of cumin, a dash of paprika, or a touch of saffron, our signature spice blends will take your taste buds on an unforgettable journey.</p>
  </div>
  <div className="story-image-content">
    <img src={Spice} alt=""  className='spiced-img'/>
  </div>
  </div> 

      </>
  )
}

export default Seasoning