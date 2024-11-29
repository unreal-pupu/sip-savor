/* eslint-disable no-unused-vars */
import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { IoSyncCircleOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { PiSnapchatLogoThin } from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
       <div className='footer-cont'>
        <div className='col-1'>
            <h3>usefull links</h3>
            <ul>
                <li>Pricing</li>
                <li>Gallery</li>
                <li>Features</li>
                <li>Service</li>
            </ul>
        </div>
        <div className='col-2'>
            <h3>newsletter</h3>
            <input type="text" placeholder='enter your email' /> <br />
            <a href="" className='foot-btn'>subscribe now</a>
        </div>
        <div className='col-3'>
            <h3>contact us</h3>
            <p>123, XYZ Road, BSK 3 , Bangalore </p>
            <div className='social-icon'>
            <BiLogoFacebook  className='fb'/>
            <BsInstagram  className='fb'/>
            <PiSnapchatLogoThin   className='fb'/>
            <FaPinterestP  className='fb'/>
            <FaXTwitter  className='fb'/>

            </div>
        </div>
       </div>
    </footer>
  )
}

export default Footer