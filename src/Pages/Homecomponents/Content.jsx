/* eslint-disable no-unused-vars */
import React from 'react'
import './Content.css'
import {motion} from 'framer-motion'
import { div } from 'framer-motion/client'
import { IoIosAdd } from "react-icons/io";
import BACK80 from '../../assets/BACK80.jpg'


const Content = () => {
  return (  
  
        <> 
         <div className='bookings-content-wrapper'>
      <div className="bookings-text-container">
        <h2 className='bookings-text-container-txt'>discover the perfect place to enjoy <span>Delicious food</span></h2>
        <p>welcome to sip& savor, where culinary artistry meets exceptional dining. join us for an unforgetable exprience today</p>
        <div className="content-newsletter">
        <input type="text" placeholder='Search by name, cuisine, or location'/>
        <input type="submit" name='submit' value={'search'} />
    </div>
    <div className="rating-container">
  <div className="rating-row">
    <h3>3,000<span className="icon"><IoIosAdd /></span></h3>
    <p>premium product</p>
  </div>
  <div className="rating-row">
    <h3>1,000<span className="icon"><IoIosAdd /></span></h3>
    <p>happy customers </p>
  </div>
  <div className="rating-row">
    <h3>50<span className="icon"><IoIosAdd /></span></h3>
    <p>awards</p>
  </div>
</div>

    </div>
    <img src={BACK80} alt="" />
      </div>

        </>
     
  )
}

export default Content