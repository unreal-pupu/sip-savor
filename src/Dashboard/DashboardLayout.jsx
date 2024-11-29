/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './DashboardLayout.css'

import Sidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <>
     <div className='dashboard-container'>
        <aside className='dashboard-sidebar'>
            <div className='sidebar-logo'>
            </div>
            <Sidebar/>
        </aside>
        <div className='dashboard-content'>
            <header className='dashboard-header'>
            </header>
            <main className='dashborad-main'>
                <Outlet/>
            </main>
        </div>
    </div>
    </>
   
  )
}

export default DashboardLayout