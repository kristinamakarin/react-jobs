import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-container">
            <a href="/" className="nav-logo">React Jobs</a>
            <div className="nav-links">
                <a href="/" className="nav-link active">Home</a>
                <a href="/" className="nav-link">Jobs</a>
                <a href="/" className="nav-link">Add Job</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar