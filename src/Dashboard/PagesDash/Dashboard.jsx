/* eslint-disable no-unused-vars */
import React from 'react'
import './Dashboard.css'
// import Hero from '../../Pages/Pricingcomponents/Gallerycomponents/Featurecomponents/Hero'
import { div } from 'framer-motion/client'
import DashB from '../../assets/DashB.jpg'
import Deli from '../Deli'


const Dashboard = () => {
  return (
   <>
   <div className='dash-hom'>
      <div className="dash-header">
        <h3 className="title"> <span>sip&</span>savor</h3>
        <select className="language-select">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
        </select>
    </div>
    <Deli/>
    </div>

   </>
    
    
   

  )
}

export default Dashboard