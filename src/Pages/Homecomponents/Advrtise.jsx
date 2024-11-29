/* eslint-disable no-unused-vars */
import React from 'react'
import Next from '../../assets/Next.jpg'
import AC from '../../assets/AC.jpg'
import './Advertise.css'

const Advrtise = () => {
  return (
      <>
       <div className="Advert-container"> 
       <div className="advert-text-content">
        <h1 className='bookings-text-container-txt'>Showcase Your Restaurant with Stunning Images and Videos</h1>
        <p>Food photography is more than just a visual treat; it’s a powerful marketing tool that can make or break your restaurant's image. In today's digital world, where customers often decide where to eat based on what they see online, high-quality food images and videos are essential for drawing attention. A well-captured image can evoke emotions, stimulate the appetite, and highlight the unique presentation of your dishes. Effective food photography conveys the freshness, texture, and richness of your meals, allowing potential customers to almost taste the food before even stepping into your restaurant.</p>
       </div>
      <img src={Next} alt=""  className='advertim'/>
      </div>
      </>
  )
}

export default Advrtise