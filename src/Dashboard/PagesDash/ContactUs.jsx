import React from 'react'
import './ContactUs.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
const ContactUs = () => {
  return (
   <>
    <div className="us">
       <h1>contact us</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate unde nostrum quae eveniet quaerat quis.</p>
    </div>
      <div className="us-container">
        <div className="us-left">
            <h1>get in touch</h1>
            <p>We're glad to have you here! Connect with us for the best taste experiences.</p>

            <div className="us-info">
                <p><CiLocationOn  className='side'/> Birmiham City</p>
                <p><IoIosCall  className='side'/>Contact us today for more information</p>
                <p><MdOutlineEmail  className='side'/> Support@sip&savor.com</p>
            </div>
            <h3 className='social-header'>follow us </h3>

            <div class="us-social-icons">
            <FaFacebookF className='us-icon' />
            <FaXTwitter className='us-icon'/>
            <BsSnapchat className='us-icon'/>
            <FaInstagram className='us-icon'/>
            </div>
        </div>

      
        <div className="us-right">
            <h3>Send a Message</h3>
            
                <div className="us-form-group">
                    <label for="name">Name</label>
                    <input type="text" />
                </div>
                <div class="us-form-group">
                    <label for="email">Email</label>
                    <input type="text" />
                </div>
                <div class="us-form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className='us-btn'>Submit</button>
            
        </div>
    </div>

   </>
  )
}

export default ContactUs