/* eslint-disable no-unused-vars */
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import './Signup.css'


const Signup = () => {
  return (
    <div className='two-layout'>
      <div className='two-column-layout'>
      <div className='left'>
        <div className='my-form'>
          <div className='login-welcome'>
          <GiMeal  className='logo'/>
          <h1>get started now</h1>
          <p>Enter your credentials to access your account</p>
          <div>
            <label for="language">Select Language:</label>
            <select id="language">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Russian">Russian</option>
                <option value="Arabic">Arabic</option>
                <option value="Italian">Italian</option>
                <option value="Portuguese">Portuguese</option>
            </select>
        </div>
          </div>
          <div  className='socials-row'>
            <a href=""><FcGoogle  className='pic'/> Sign up with Google</a>
            <a href=""><FaApple  className='pic'/> Sign in with Apple</a>
          </div>
          <div className='text-field'>
            <label htmlFor="name">Name</label>
            <input type="text"  id='name' name='name' placeholder='enter your name' required/>
            <div className='error-message'>your name is required</div>
          </div>
          <div className='text-field'>
            <label htmlFor="email">Email</label>
            <input type="text"  id='email' name='email' placeholder='enter your email' required/>
            <div className='error-message'>your mail is required</div>
          </div>
          <div className='text-field'>
            <label htmlFor="password">Password</label>
            <input type="text"  id='password' name='password' placeholder='your password' required/>
            <div className='error-message'>your password is required</div>
          </div>
          <div className="checkbox-container">
      <label htmlFor="terms">
        <input type="checkbox" id="terms" />
        <a href="/terms" target="_blank" rel="noopener noreferrer">
          I agree to the terms and privacy
        </a>
      </label>
    </div>
          <button type='submit' className='my-formbtn'>sign up</button>
          <div className='my-form-acrion'>
            <div className='my-form-row'>
              
              <a href="" title='login'> <span> Have an account?</span> Sign in</a>
              <a href="" title='forgot password'>Forgot Password</a>
            </div>
           
          </div>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Signup