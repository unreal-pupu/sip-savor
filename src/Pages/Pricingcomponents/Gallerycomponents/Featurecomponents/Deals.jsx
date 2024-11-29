/* eslint-disable no-unused-vars */
import React from 'react'
import './Deals.css'
import PB from '../../../../assets/PB.jpg'
import ZZZ from '../../../../assets/ZZZ.jpg'

const Deals = () => {
  return (
    <section className="deals">
    <h2>Exclusive Deals</h2>
    <div className="deal-banner">
      <img src={PB} alt="" />
      <div className="deal-info">
        <h3>Happy Hour Specials</h3>
        <p>Get 50% off cocktails at select venues every Friday!</p>
      </div>
    </div>
    </section>
  )
}

export default Deals