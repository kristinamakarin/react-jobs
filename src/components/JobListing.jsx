import React from 'react'

const JobListing = ( {job} ) => {
  return (
    <div key={job.id} className="card bg-light">

        <div className="job-type">{job.type}</div>
        <h2>{job.title}</h2>
        <p>{job.description}</p>
        <h3 className="job-salary">{job.salary} / Year</h3>

        <div className="job-footer">
            <div className="job-location"> {job.location}</div>
            <a href={`/jobs/${job.id}`} className="btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default JobListing