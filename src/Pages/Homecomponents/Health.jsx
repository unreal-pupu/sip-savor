/* eslint-disable no-unused-vars */
import React from 'react'
import './Health.css'

const Health = () => {
  return (
      <>
       <h1 class="health-heading">Health information</h1>
      <div class="health-main-container">
    <div class="healt-cards-container">
      <div class="health-card cardonth">
        <h2> Offer Nutritionally Balanced Menus</h2>
        <p>Provide a variety of menu options that cater to different dietary needs and preferences (e.g., vegan, gluten-free, low-carb, keto, paleo, low-sodium). Offering a diverse selection helps people make healthier choices based on their individual requirements.</p>
      </div>
      <div class="health-card cardtwo">
        <h2> Provide Customizable Options</h2>
        <p>we allow customers to customize their meals. For example, customers could choose their own salad toppings, protein, and dressing. This flexibility enables them to make healthier choices that fit their preferences.</p>
      </div>
    </div>
    <div class="health-right-side">
      <h1>Our Menus Are Nutritiously Balanced</h1>
      <p>At sip & savor, we're not just about great food; we're about great health. We provide fresh, delicious, and nutritious meals designed to fuel your body and mind. Join us in creating a healthier community, one meal at a time!</p>
    </div>
  </div>
      </>
  )
}

export default Health