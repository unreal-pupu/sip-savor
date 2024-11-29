/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
     <div className='hero'>
    <h1>Discover Your Next Favorite Spot</h1>
    <p>Explore top-rated restaurants, bars, and exclusive menus near you.</p>
    <div className="hero-search-bar">
        <input type="text" placeholder='Search by name, cuisine, or location'/>
        <input type="submit" name='submit' value={'Lets start' } />
    </div>

    </div>

    </>
  )
}

export default Hero