/* eslint-disable no-unused-vars */
import React from 'react'
import './Showcase.css'
import Fries from '../../assets/Fries.jpg'
import Seafood from '../../assets/Seafood.jpg'
import Vegan from '../../assets/Vegan.jpg'
import BBQ from '../../assets/BBQ.jpg'

const Showcase = () => {
  return (
    <div>
        <div className="show-container">
    <div className="show-text-content">
        <h2>Showcase your food with beautiful photos</h2>
        <p>My Menu showcases your food videos on autoplay. The decision making on what to order is no longer driven by price but more driven by the way food is being presented. This guarantees an increase in your sales because your guests will be mesmerized by your food and will definitely be tempted to order more!</p>
    </div>
    <div className="show-image-grid">
        <img src={Vegan} alt="" className='img-grid' />
        <img src={BBQ} alt="" className='img-grid' />
        <img src={Seafood} alt="" className='img-grid' />
        <img src={Fries} alt="" className='img-grid' />
    </div>
</div>
    </div>
  )
}

export default Showcase