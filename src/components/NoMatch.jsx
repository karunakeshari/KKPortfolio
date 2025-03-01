import React from 'react'
import { Link } from 'react-router-dom'
function NoMatch() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 text-blue-900">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-2">The page you are looking for does not exist.</p>
      <Link
        to="/" // Change this to your desired route
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Go to Home
      </Link>
    </div>
  )
}

export default NoMatch
