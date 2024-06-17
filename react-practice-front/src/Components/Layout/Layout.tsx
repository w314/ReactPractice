import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Layout.css"

const Layout: React.FC<{}> = () => {

  return (
    <div className="app">  
      <header>
        <h1 className="page-title">React Practice</h1>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}


export default Layout