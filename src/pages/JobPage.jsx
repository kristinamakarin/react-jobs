import React from 'react'
import { useLoaderData } from "react-router-dom"

const JobPage = () => {
    const job = useLoaderData();
  return (
    <div>
        <h2>{job.title}</h2>
    </div>
  )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader};