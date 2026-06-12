import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <section className="cards-section">
        <div className="button-card">
            <Link to="/jobs" className="btn-view-all-jobs">View All Jobs</Link>
        </div>
    </section>
  )
}

export default ViewAllJobs