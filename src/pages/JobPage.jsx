import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { HiH2 } from "react-icons/hi2";

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            } catch(error) {
            console.log('Error fetch data', error);
        } finally {
            setLoading(false);
        }
    }; 
    fetchJob();
},[]);
  return (
    <div>
        {loading ? <Spinner /> : <h2>{job.title}</h2>}
    </div>
  )
}

export default JobPage