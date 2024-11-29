/* eslint-disable no-unused-vars */
import React from 'react'
import './Price.css'
import { BsCurrencyDollar } from "react-icons/bs";

const Price = () => {
  return (
    <div>
         <div className="Price-container">
    <div className="price-card">
      <h1>Startup menu</h1>
      <p>ideal for small resturants & cafes</p>
      <h4><BsCurrencyDollar /> 39 / month</h4>
      <p>save 20% per month with yearly plan</p>
      <p>1 to 6 Tablets</p>
      <p>1 to 15 QR codes</p>
      <button>Explore</button>
    
    </div>
    <div className="price-card">
    <h1>Silver menu</h1>
      <p>ideal for resturants with 30 tables </p>
      <h4><BsCurrencyDollar /> 55 / month</h4>
      <p>save 20% per month with yearly plan</p>
      <p>7 to 12 Tablets</p>
      <p>1 to 30 QR codes</p>
      <button>Explore</button>
    
    </div>
    <div className="price-card">
    <h1>Gold menu</h1>
      <p>ideal for resturants with 100 table</p>
      <h4><BsCurrencyDollar /> 65 / month</h4>
      <p>save 20% per month with yearly plan</p>
      <p>13 to 29 Tablets</p>
      <p>1 to 100 QR codes</p>
      <button>Explore</button>
    
    </div>
    <div className="price-card">
    <h1>Platinum menu</h1>
      <p>ideal for resturants/hotels with 200 tables/rooms</p>
      <h4><BsCurrencyDollar /> 99 / month</h4>
      <p>save 20% per month with yearly plan</p>
      <p>30 to 60 Tablets</p>
      <p>1 to 200 QR codes</p>
      <button>Explore</button>
      
    </div>
    <div className="price-card">
    <h1>Setup fee</h1>
      <p>one time set up fee for menu design</p>
      <h4><BsCurrencyDollar /> 99 / month</h4>
      <p>save 20% per month with yearly plan</p>
      <p>currently free with all plans for limited time only!</p>
      <button>Explore</button>
    </div>
    <div className="price-card">
    <h1>emerald menu</h1>
      <p>ideal for resturants/hotels with 800 tables/rooms</p>
      <h4><BsCurrencyDollar /> 179 / month</h4>
      <p>save 20% per month with yearly plan</p>
      <p>up to 120 Tablets</p>
      <p>oonline ordering</p>
      <button>Explore</button>
      
    </div>
    <div className="price-card">
    <h1>managed services</h1>
      <p>ideal for resturants with less staffing</p>
      <h4><BsCurrencyDollar /> 129 / month</h4>
      <p>save 20% per month with yearly plan</p>
      <p>menu optimization</p>
      <p>run promotions</p>
      <button>Explore</button>
     
    </div>
    <div className="price-card">
         
    <h1>Diamond menu</h1>
      <p>ideal for resturants/hotels with 500 tables/rooms</p>
      <h4><BsCurrencyDollar /> 119 / month</h4>
      <p>save 20% per month with yearly plan</p>
      <p>up to 90 Tablets</p>
      <p>online ordering</p>
      <button>Explore</button>
    
    </div>
  </div>
    </div>
  )
}

export default Price