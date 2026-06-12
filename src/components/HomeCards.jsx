import React from 'react'
import Card from "./Card"
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <section className="cards-section">
        <div className="cards-grid">
            <Card>
                <h2> For Developers </h2>
                <p> Browse our React jobs and start your career today </p>
                <Link to="/jobs" className="btn btn-primary"> Browse Jobs </Link>
            </Card>
            <Card bg="bg-accent">
                <h2> For Employers </h2>
                <p> List your job to find the perfect React developer for your rol </p>
                <Link to="/add-jobs" className="btn btn-secondary"> Add Job </Link>
            </Card>
        </div>
    </section>
  )
}

export default HomeCards