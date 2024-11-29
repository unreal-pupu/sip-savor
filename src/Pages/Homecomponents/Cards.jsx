/* eslint-disable no-unused-vars */
import React from 'react'
import './Cards.css'
import { BsQrCode } from "react-icons/bs";
import { PiSmileyLight } from "react-icons/pi";
import { SiAirtable } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";


const Cards = () => {
  return (
      <>
       <h2 className='cardhead-one'>services that <span> we offer</span></h2>
      <div className='feature-container'>
      <div className='feature-card-row'>
      <div className='feature-card'>
        <PiSmileyLight  className='card-ic'/>
        <h4>Guest Interactions</h4>
        <p>We love seeing your photos! Tag us in your delicious moments for a chance to be featured </p>
        </div>
       
      <div className='feature-card'>
        <BsQrCode  className='card-ic'/>
        <h4>No APP required</h4>
        <p>Reserve your table in seconds! Scan the QR code to book your spot now.</p>
        </div>
      <div className='feature-card'>
        <SiAirtable  className='card-ic'/>
        <h4>Reserve Your Spot with Ease</h4>
        <p>Planning a special occasion? Book your table in advance for the best dining experience!</p>
        </div>
      <div className='feature-card'>
        <CiDeliveryTruck  className='card-ic'/>
        <h4>Hungry?</h4>
        <p>Order your favorites online and get them delivered fast! Enjoy exclusive online deals when you order directly from us!</p>
        </div>

      </div>
     
      </div>

      </>
      
      
    
  )
}

export default Cards