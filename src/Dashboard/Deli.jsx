import React from 'react'
import './Deli.css'
import { FaHamburger } from "react-icons/fa";
import { LuIceCream2 } from "react-icons/lu";
import { CiBeerMugFull } from "react-icons/ci";
import { FaBowlRice } from "react-icons/fa6";
import DashB from '../../src/assets/DashB.jpg'
import { GoArrowUpRight } from "react-icons/go";

const Deli = () => {
  return (
    <>
     <div className="deli-container">
        <div className="deli-left">
            <h1>Delicious food is waiting for you</h1>
            <button class="deli-button">veiw menu <GoArrowUpRight /></button>
            <div className="deli-icons">
            <FaHamburger className='deli-main-icons'/>
            <LuIceCream2 className='deli-main-icons' />
            <CiBeerMugFull className='deli-main-icons'/>
            <FaBowlRice className='deli-main-icons'/>
                
            </div>
        </div>
        <div className="deli-right">
            <img src={DashB} alt="" />
        </div>
    </div>
    </>
    
  )
}

export default Deli