/* eslint-disable no-unused-vars */
import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Features from './Pages/Features'
import Pricing from './Pages/Pricing'
import Gallery from './Pages/Gallery'
import Service from './Pages/Service'
import './App.css'
import Signup from './Pages/Signup'
import Register from './Pages/Register'
import DashboardLayout from './Dashboard/DashboardLayout'
import FoodMenu from './Dashboard/PagesDash/FoodMenu'
import Dashboard from './Dashboard/PagesDash/Dashboard'
import DrinksMenu from './Dashboard/PagesDash/DrinksMenu'
import Info from './Dashboard/PagesDash/Info'
import Cart from './Dashboard/PagesDash/Cart'
import Privacy from './Dashboard/PagesDash/Privacy'
import ContactUs from './Dashboard/PagesDash/ContactUs'
import Deposit from './Dashboard/PagesDash/Deposit'



const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children:[
    {
      index: true,
      element: <Home/>
    },
  
    {
      path: "features",
      element: <Features/>

    },
  
    {
      path: "pricing",
      element: <Pricing/>

    },
    {
      path: "gallery",
      element: <Gallery/>

    },
    {
      path: "service",
      element: <Service/>

    },
   
    {
      path: "signup",
      element: <Signup/>
    },
    {
      path: "register",
      element: <Register/>
    },
  ]
  
  
},
{
  path: '/dashboard',
  element: <DashboardLayout/>,
  children: [
    {index: true,
     element: <Dashboard/>},

    {path: "foodmenu",
    element: <FoodMenu/>},

    {path: "drinksmenu", 
    element: <DrinksMenu/>},
    
    {path: "info", 
    element: <Info/>},

    {path: "cart", 
    element: <Cart/>},

    {path: "privacy", 
    element: <Privacy/>},

    {path: "deposit", 
    element: <Deposit/>},

    {path: "contactus", 
    element: <ContactUs/>}
    
  ]
}
])

function App() {

  return <RouterProvider router={router} />
}

export default App
