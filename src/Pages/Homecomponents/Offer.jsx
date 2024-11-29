/* eslint-disable no-unused-vars */
import React from 'react'
import './Offer.css'
import Drink from '../../assets/Drink.jpg'
import Appetizer from '../../assets/Appetizer.jpg'
import Breakfast from '../../assets/Breakfast.jpg'

const Offer = () => {
  return (
    <div>
         <div className='feature-container'>
      <h2 className='bookings-text-container-txt'>We Offer Top Notch</h2>
      <div className='feature-card-row'>
      <div className='feature-card'>
        <img src={Breakfast} alt="" />
        <h4>Breakfast</h4>
        <button className='offer-btn'>veiw</button>
        
        </div>
       
      <div className='feature-card'>
        <img src={Appetizer} alt="" />
        <h4>Appetizers</h4>
        <button className='offer-btn'>veiw</button>
       
        </div>
      <div className='feature-card'>
        <img src={Drink} alt="" />
        <h4>Drinks</h4>
        <button className='offer-btn'>veiw</button>
      
        </div>
      </div>
     
      </div>
    </div>
  )
}

export default Offer