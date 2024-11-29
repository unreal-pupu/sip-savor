/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaExpandAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import './Sidebar.css'

const Sidebar = () => {
  return (
   <>
    <div className='burst'>
        <nav>
                <div className='sidebar-menu'>
                  <div className='sidebar-top'>
                  <h2 className='logo-wrapper'><span>Sip &</span>Savor</h2>
                  </div>
                  <button className='expand-btn'><FaExpandAlt className='sv' /></button>
                  <div className='search-wrapper'>
                    <input type="search"  placeholder='search for anything'/>
                    </div>
               
                <ul className='sidebar-links'>
                    <li><NavLink className='active' to= "/dashboard"><MdDashboard /> Dashboard</NavLink></li>
                    <li><NavLink className='linked' to= "foodmenu">Food Menu</NavLink></li>
                    <li><NavLink className='linked' to= "drinksmenu">Drinks Menu</NavLink></li>
                    <li><NavLink className='linked' to= "info"><GiShoppingBag /> Delivery</NavLink></li>
                    <li><NavLink className='linked' to= "cart"><MdOutlineShoppingCart /> Cart</NavLink></li>
                    <li><NavLink className='linked' to= "contactus"> <IoMdCall /> Contact Us</NavLink></li>
                    <li><NavLink className='linked' to= "deposit"> <MdOutlinePayment /> Payments</NavLink></li>
                    <li><NavLink className='linked' to= "privacy"> <MdOutlinePrivacyTip /> Privacy Policy</NavLink></li>
                </ul>
                </div>

              
            </nav>

    </div>
   </>
  )
}

export default Sidebar