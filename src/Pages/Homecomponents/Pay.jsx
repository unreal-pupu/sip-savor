/* eslint-disable no-unused-vars */
import React from 'react'
import './Pay.css'
import Trast from '../../assets/Trast.jpg'


const Pay = () => {
  return (
      <>
       <div className="pay-container">
    <div className="pay-text-left">
        <h2 className='bookings-text-container-txt'>Pay Now or Later – Your Choice, Your Convenience</h2>
        <p className='long'>Flexible Payment Options for a Stress-Free ExperienceOur Pay at Table and Pay Later services will enhance your dining experience. Allow your clients to simply settle their bills, thereby increasing overall satisfaction and efficiency at your restaurant</p>
    
    </div>
    <img src={Trast} alt="" className='Trast' />

   </div>

      </>
  )
}

export default Pay