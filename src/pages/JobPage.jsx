import React from 'react'
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
const JobPage = () => {
    const job = useLoaderData();
  return (
    <>
    <section className="back-section">
        <div className="container">
            <div className="back-to">
                <Link to="/jobs" className="back-to-btn"> <FaArrowLeft className="back-to-icon" /> Back to Job Listings</Link> 
            </div>
        </div>
    </section>
    <section className="job-details-section">
        <div className="container">
            <div className="job-grid">
                <main className="job-main">
                    <div className="job-card text-center-mobile">
                        <div className="job-type">{job.type}</div>
                        <h1 className="job-title">{job.title}</h1>
                        <p className="job-location"><FaMapMarker className="location-icon" /> {job.location}</p>
                    </div>
                    <div className="job-card">
                        <h3 className="card-subtitle">Job Description</h3>
                        <p className="job-description">{job.description}</p>
                        <h3 className="card-subtitle">Salary</h3>
                        <p className="job-salary">{job.salary} / Year</p>
                    </div>
                </main>
                <aside className="job-sidebar">
                    <div className="job-card">
                        <h3 className="sidebar-title">Company Info</h3>
                        <h2 className="company-name">{job.company.name}</h2>
                        <p className="company-description">{job.company.description}</p>

                        <hr className="divider" />

                        <h3 className="contact-label">Contact Email:</h3>
                        <p className="contact-badge">{job.company.contactEmail}</p>

                        <h3 className="contact-label">Contact Phone:</h3>
                        <p className="contact-badge">{job.company.contactPhone}</p>
                    </div>
                    <div className="job-card">
                        <h3 className="sidebar-title">Manage Job</h3>
                        <Link to={`/edit-job/${job.id}`} className="button btn-edit">Edit Job</Link>
                        <button className=" button btn-delete">Delete Job</button>
                    </div>
                </aside>
            </div>
        </div>
    </section>
    </>
  )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader};