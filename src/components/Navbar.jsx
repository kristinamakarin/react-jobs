import React from 'react'
import logo from '../assets/images/logo.png'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const linkClass = ({isActive}) => 
      isActive ? 'nav-link active' : 'nav-link';
  return (
    <nav className="navbar">
        <div className="nav-container">
            <Link to="/" className="nav-logo">
            <img className="nav-logo-img" src={logo} alt="React Jobs Logo" />React Jobs</Link>
            <div className="nav-links">
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
                <NavLink to="/add-jobs" className={linkClass}>Add Job</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar