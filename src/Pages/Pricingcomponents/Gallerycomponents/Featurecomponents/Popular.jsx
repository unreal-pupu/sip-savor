/* eslint-disable no-unused-vars */
import React from 'react'
import './Popular.css'
import PB from '../../../../assets/PB.jpg'
import PC from '../../../../assets/PC.jpg'
import PD from '../../../../assets/PD.jpg'
import PV from '../../../../assets/PV.jpg'
import PE from '../../../../assets/PE.jpg'

const Popular = () => {
  return (
    <section className="categories">
    <h2>Popular Categories</h2>
    <div className="category-list">
      <div className="category-item">
      <img src={PC} alt="" />
        <p>Italian</p>
      </div>
      <div className="category-item">
      <img src={PE} alt="" />
        <p>Asian</p>
      </div>
      <div className="category-item">
      <img src={PD} alt="" />
        <p>American</p>
      </div>
      <div className="category-item">
        <img src={PV} alt="" />
        <p>Vegan</p>
      </div>
    </div>
  </section>
  )
}

export default Popular