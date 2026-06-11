import jobs from '../jobs.json';
import JobListing from './JobListing';
import React from 'react'

const JobListings = () => {
    const recentJobs = jobs.slice(0, 3);
  return (
    <section className="cards-section-jobs">
        <h2 className="listings-title">Browse Jobs</h2>
        <div className="cards-grid-jobs">
            {recentJobs.map((job) => (
                <JobListing key={job.id} job={job} />
            ))}
        </div>
    </section>
  )
}

export default JobListings