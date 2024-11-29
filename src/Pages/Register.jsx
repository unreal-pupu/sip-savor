/* eslint-disable no-unused-vars */
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import './Register.css'

const Register = () => {
  return (
    <div className='Register-form'>
      <div className='login-register'>
      <div className='login-welcome'>
        <h1>welcome</h1>
        <div className='sel'>
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
      <div className='login-social-row'>
        <a href=""><FcGoogle  className='licoon'/>sign in with</a>
        <a href=""><FaApple  className='licoon' />sign in with</a>
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
          <div>
            <a href="" className="forgot-password">Forgot Password?</a>
        </div>
          <button type='submit' className='my-login-btn'>Login</button>
          <div className='login-form-actions'>
            <div className='register-form-row'>
             <span> Don't have an account?</span> 
            <a href="" title='sign'>Sign up</a>
            </div>
          </div>

      </div>
     
    </div>
  )
}

export default Register