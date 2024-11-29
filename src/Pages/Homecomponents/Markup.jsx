import React from 'react'
import './Markup.css'
import { GrGoogleWallet } from "react-icons/gr";
import { FaAirbnb } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";
import { SiWoocommerce } from "react-icons/si";
import { SiAmazon } from "react-icons/si";
import { SiIntercom } from "react-icons/si";
import { FaShopify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Markup = () => {
  return (
        <>
        <div className='mark-container'>
            <p>over 50+ resturants and hotels are growing with our platform</p>
            <div className='icons-classcontainer'>
            <GrGoogleWallet  className='ict'/>
            <FaAirbnb  className='ict' />
            <FaCcStripe  className='ict' />
            <SiUbereats   className='ict'/>
            <SiWoocommerce   className='ict'/>
            <SiAmazon  className='ict'/>
            <SiIntercom   className='ict'/>
            <FaShopify  className='ict'/>
            <FcGoogle  className='ict'/>

            </div>
        </div>

        </>
  )
}

export default Markup