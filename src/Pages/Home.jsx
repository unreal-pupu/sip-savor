/* eslint-disable no-unused-vars */
// import React from 'react'
import Content from './Homecomponents/Content'
import Cards from './Homecomponents/Cards' 
import Story from './Homecomponents/Story'
import Advrtise from './Homecomponents/Advrtise'
import Multiple from './Homecomponents/Multiple'
import Pay from './Homecomponents/Pay'
import Stamp from './Homecomponents/Stamp'
import Health from './Homecomponents/Health'
import Seasoning from './Homecomponents/Seasoning'
import Gift from './Homecomponents/Gift'
import Sip from './Homecomponents/Sip'
import Order from './Homecomponents/Order'
import Campaign from './Homecomponents/Campaign'
import Good from './Homecomponents/Good'
import Manger from './Homecomponents/Manger'
import Feedback from './Homecomponents/Feedback'
import Customer from './Homecomponents/Customer'
import Ready from './Homecomponents/Ready'
import Markup from './Homecomponents/Markup'
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";
import { delay } from 'framer-motion'


const Home = () => {

  useEffect(() => {
    
    ScrollReveal().reveal(".bookings-text-container-txt", {
      duration: 2000, 
      distance: "60px",
      delay: '400', 
      easing: "ease-in-out", 
      origin: "bottom", 
      reset: true         
    });
    ScrollReveal().reveal('img', {delay: 300, origin: 'left'} );
  }, []);

   

  return (
    <>
    <Content />
    <Markup/>
    <Cards />
    <Story/>
    <Pay/>
    <Health/>
    <Multiple/>
    <Stamp/>
    <Advrtise/>
    <Seasoning/>
    <Gift/>
    <Sip/>
    <Order/>
    <Manger/>
    <Campaign/>
    <Good/>
    <Feedback/>
    <Customer/>
    <Ready/>
    </>
  )
}

export default Home