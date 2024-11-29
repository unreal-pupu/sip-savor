/* eslint-disable no-unused-vars */
import React from 'react'
// import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom'
import Footer from './Pages/Footercomponents/Footer'
import { FiUser } from "react-icons/fi";
import './App.css'
import ScrollToTop from './ScrollToTop';


const Layout = () => {
  return (
    <div>
            <nav className='menu-wrapper'>
                <div className='menu-bar'>
                <h2 className='logo'><span>Sip &</span> Savor</h2>
                <ul className='navigation-hide'>
                    <li><NavLink className='active' to= "/">Home</NavLink></li>
                    <li><NavLink className='fly' to= "pricing">Pricing</NavLink></li>
                    <li><NavLink className='fly' to= "gallery">Gallery</NavLink></li>
                    <li><NavLink className='fly menu-item' to= "service">Service</NavLink>
                   </li>
                    <li><NavLink className='fly' to= "features">Features</NavLink></li>
                </ul>
                </div>
                <div className='action-buttons'>
                    <div className='anchor'>
                    <NavLink className='secondary' to= "signup">sign up</NavLink>
                    <NavLink className='primary' to= "register"> <FiUser /> Register</NavLink>
                    </div>
              
                </div>
            </nav>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
        <ScrollToTop/>
    
    </div>
  )
}

export default Layout