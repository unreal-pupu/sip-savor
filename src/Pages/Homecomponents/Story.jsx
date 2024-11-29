/* eslint-disable no-unused-vars */
import React from 'react'
import Dinning from '../../assets/Dinning.jpg'
import './Story.css'

const Story = () => {
  return (
      <>
      <div className="story-container">
     <div className="story-text-content">
    <h4 className='bookings-text-container-txt'>our story</h4>
    <h2>every flavor tells a story</h2>
    <p>We’re a restaurant dedicated to serving authentic, fresh, and innovative cuisine that delights the senses and brings people together. Our menu is crafted with care, featuring locally sourced ingredients and a passion for culinary artistry, blending traditional recipes with modern twists. From cozy ambiance to exceptional service, every detail is designed to create a memorable dining experience</p>
   </div>
   <div className="story-image-content">
    <img src={Dinning} alt="" />
   </div>
  </div>
      </>
      
    
  )
}

export default Story