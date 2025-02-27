import React from 'react'

function Experience() {
  return (
    <div className="bg-white text-black px-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Experience</h2>

      <div className="border border-gray-300 shadow-lg rounded-lg p-6 bg-blue-50">
        <h3 className="text-xl font-semibold text-blue-600">HSBC</h3>
        <p className="text-gray-700">Software Engineer (Aug 2023 - Present)</p>

        <h4 className="mt-4 font-semibold text-blue-600">DataVisa</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Contributed to HSBC’s cloud India team on DataVisa, a global platform that transforms data approval.</li>
          <li>Automated the Privacy Impact Assessment using 40 metrics, eliminating the manual review that reduced approval time by 
          23% </li>
          <li>Designed and implemented a "Validate Your Entry" button for all forms, improving user experience and reducing form completion time 
          by 30% using React, TypeScript, and JavaScript.</li>
          <li>Resolved 20+ production bugs as part of the Prod Issues pod, ensuring system stability.</li>
          <li>Used SonarQube for code quality analysis and successfully eliminated all code vulnerabilities.</li>
        </ul>
        <h4 className="mt-4 font-semibold text-blue-600">ROP</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Worked on ROP application that maintains a comprehensive record of data processing activities, ensuring regulatory compliance.</li>
          <li>Implemented an edit functionality for Data Processor, enabling seamless updates for 40 fields </li>
          <li>Enhanced user experience by implementing a tabbed form view and added pagination for better navigation and convenience..</li>
        </ul>
      </div>
    </div>
  )
}

export default Experience
