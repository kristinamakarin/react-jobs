import React from 'react'
import { Link } from 'react-router-dom'
import { FaTriangleExclamation } from "react-icons/fa6"

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <FaTriangleExclamation className="not-found-icon"/>
      <h1 className="not-found-title">404 Not Found</h1>
      <p className="not-found-text">This page does not exist</p>
      <Link
        to="/"
        className="not-found-btn"
        >Go Back
      </Link>
    </section>
  )
}

export default NotFoundPage