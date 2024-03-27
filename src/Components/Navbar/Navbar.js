import React from 'react'
import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar">
            <div className="nav">
                <NavLink to='/' className="nav-logo">
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" />
                    <h1>GeeksFoods</h1>
                </NavLink>
                <div className="navbar-menu">
                    <ul>
                        <li><NavLink to='/' style = {{color: "rgb(59, 130, 246)"}}>Home</NavLink></li>
                        <li><NavLink to='/quotes'>Quote</NavLink></li>
                        <li><NavLink to='/restraunts'>Resturants</NavLink></li>
                        <li><NavLink to='/foods'>Foods</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-btn-container">
                    <button className="navbar-btn">Get Started</button>
                </div>
            </div>
        </nav>
  )
}