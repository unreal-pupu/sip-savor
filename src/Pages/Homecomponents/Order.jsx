/* eslint-disable no-unused-vars */
import React from 'react'
import './Order.css'
import Chairw from '../../assets/Chairw.jpg'

const Order = () => {
  return (
    <>
     <div>
          <div className="form-container">
      <form className="form">
      <h1 className='form-txt'>Buy our products from anywhere</h1>
        <div className="form-row">
          <div className="form-field">
           
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-field">
           
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
         
            <input type="text" id="country" name="country" placeholder="Enter your country" required />
          </div>
          <div className="form-field">
           
            <input type="text" id="zip" name="zip" placeholder="Enter your zip code" required />
          </div>
        </div>

        <button type="submit" className='order-btn'>Submit</button>
      </form>
    </div>
    </div>
    </>
   
  )
}

export default Order