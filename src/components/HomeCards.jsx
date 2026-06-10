import React from 'react'
import Card from "./Card"

const HomeCards = () => {
  return (
    <section className="cards-section">
        <div className="cards-grid">
            <Card>
                <h2> For Developers </h2>
                <p> Browse our React jobs and start your career today </p>
                <a href="/" className="btn btn-primary"> Browse Jobs </a>
            </Card>
            <Card bg="bg-accent">
                <h2> For Employers </h2>
                <p> List your job to find the perfect React developer for your rol </p>
                <a href="/" className="btn btn-secondary"> Add Job </a>
            </Card>
        </div>
    </section>
  )
}

export default HomeCards