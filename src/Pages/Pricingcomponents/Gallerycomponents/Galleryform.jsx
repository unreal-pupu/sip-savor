/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './Galleryform.css'

const Galleryform = () => {
    const [formData, setFormData] = useState({
        venueName: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        menuItems: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
      };
    
      return (
        <form className="photography-form" onSubmit={handleSubmit}>
          <h2>request for Food Photography Booking</h2>
    
          <label>
            Venue/Restaurant Name:
            <input
              type="text"
              name="venueName"
              value={formData.venueName}
              onChange={handleChange}
              required
            />
          </label>
    
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
    
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
    
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
    
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
    
          <label>
            Number of Menu Items for Photography:
            <input
              type="number"
              name="menuItems"
              value={formData.menuItems}
              onChange={handleChange}
              required
            />
          </label>
    
          <button type="submit">Submit</button>
        </form>
      );
    };

export default Galleryform