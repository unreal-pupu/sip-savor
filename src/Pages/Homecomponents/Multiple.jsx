/* eslint-disable no-unused-vars */
import React from 'react'
import Menu from '../../assets/menu.jpg'
import './Multiple.css'
import Kast from '../../assets/Kast.jpg'

const Multiple = () => {
  return (
      <>
       <div class="multi-main-container">
    <div class="multi-left-side">
      <h1>Multiple menu patterns</h1>
      <h3>Design your own menu!</h3>
      <p>Your menu is an extension of your brand, and we recognize the value of representing your own style. With our many menu layouts, you can tailor your menu to the aesthetics of your company while also creating a one-of-a-kind digital adventure for your customers!</p>
    </div>
    <div class="multi-images-container">
      <img src={Menu} alt="" className='im1'/>
      <img src={Kast} alt="" className='im2'/>
    </div>
  </div>

      </>
        

  )
}

export default Multiple