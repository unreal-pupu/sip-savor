import React from 'react'
import './Deposit.css'
import PayA from '../../assets/PayA.jpg'
import PayB from '../../assets/PayB.jpg'
import PayC from '../../assets/PayC.jpg'

const Deposit = () => {
  return (
   
   <>
    <div className="payment-container">
        <div className='payment-method'>
        <h1>Payment</h1>
        <h4>Choose payment methods below</h4>
        </div>
            <div className='pay-images'>
                <img src={PayB} alt="" />
                <img src={PayC} alt="" />
                <img src={PayA} alt="" />
            </div>
    
        <div className="form-container">
    
            <div className="billing-form">
                <h2>Billing Details</h2>
                    <label for="name">Full Name</label>
                    <input type="text" id='name' name='name' required />
                    <label for="address">Address</label>
                    <input type="text" id='address' name='address' required />
                    <label for="city">City</label>
                    <input type="text" id='city' name='city' required />
                    <label for="zipcode">Zip Code</label>
                    <input type="text" id='zipcode' name='zipcode' required />
                    <label for="country">Country</label>
                    <select className="country-select">
                    <option value="en">United States</option>
                    <option value="it">England</option>
                    <option value="es">Spain</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="it">Italy</option>       
                    </select>
                    <button type="button" class="back-btn">Return to menu</button>
            </div>

            <div className="card-details">
                <h2>Card Details</h2>
                    <label for="card-number">Card Holder name</label>
                    <input type="text" id='card-name' name='card-name' placeholder='Enter your name'required />
                    <div class="expiry-container">
                        <div class="expiry-item">
                            <label for="exp-month">Expiration Month</label>
                            <input type="text" id='exp-month' name='exp-month' placeholder='DD/MM' maxLength={2} required />
                        </div>
                        <div class="expiry-item">
                            <label for="exp-year">Expiration Year</label>
                            <input type="text" id='exp-year' name='exp-year' placeholder='YYYY' maxLength={4} required />
                        </div>
                    </div>
                    <label for="cvv">CVV</label>
                    <input type="text" id='cvv' name='cvv' placeholder='123' required/>
                    <button type="button" class="back-btn">Back to Shipping</button>
                    <button type="submit" class="proceed-btn">Proceed</button>
            </div>
        </div>
    </div>
   </>
   
  
  )
}

export default Deposit