import jobs from '../jobs.json';
import JobListing from './JobListing';
import { useState, useEffect } from 'react';
import React from 'react'
import Spinner from "./Spinner";

const JobListings = ( {isHome = false} ) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:8000/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);


  return (
    <section className="cards-section-jobs">
        <h2 className="listings-title"> { isHome ? 'Recent Jobs' : 'Browse Jobs' }</h2>
        <div className="cards-grid-jobs">
            {loading ? (
                <Spinner />
            ) : (
                <>
                    {jobs.map((job) => (
                        <JobListing key={job.id} job={job} />
                    ))}
                </>
            )}
        </div>
    </section>
  )
}

export default JobListings