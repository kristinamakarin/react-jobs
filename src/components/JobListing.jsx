import React from 'react'
import { useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'

const JobListing = ( {job} ) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;
  if(!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }
  
  return (
    <div className="card bg-light">

        <div className="job-type">{job.type}</div>
        <h2>{job.title}</h2>
        <p>{description}</p>
        <button className="btn-toggle" onClick={() => setShowFullDescription((prevState)=>(!prevState))}>
          {showFullDescription ? 'Less' : 'More'}
        </button>
        <h3 className="job-salary">{job.salary} / Year</h3>

        <div className="job-footer">
            <div className="job-location">
            <FaMapMarkedAlt className="icon-location"/>
                {job.location}
            </div>
            <Link to={`/jobs/${job.id}`} className="btn-primary">Read More</Link>
        </div>
    </div>
  )
}

export default JobListing