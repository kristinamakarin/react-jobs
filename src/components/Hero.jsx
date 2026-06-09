import React from 'react'

const Hero = ( {title = 'Become a React Developer', subtitle = 'Find the React job that fits your skills and needs'} ) => {
  return (
    <section className="hero-section">
        <div className="hero-container">
            <h1 className="main-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
        </div>
    </section>
  )
}

export default Hero