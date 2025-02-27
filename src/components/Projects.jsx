import React from "react";

const project = [
  {
    title: "Real-time chat application",
    description: "A real-time chat application enabling seamless two-way communication with authentication and a modern UI",
    points: [
      "Seamless two-way communication, ensuring efficient message delivery",
      "Authentication via email and phone number, enhancing security and user verification",
      "Intuitive UI using Tailwind CSS and DaisyUI for a modern, responsive, and visually appealing experience",
    ],
    techStack: ["JavaScript", "React", "WebSockets", "Socket.io" , "Tailwind CSS"],
  },
  {
    title: "Volume Booster Chrome Extension",
    description: "A Chrome extension that boosts audio output by up to 600% with real-time volume control and an intuitive UI.",
    points: [
      "Amplifies audio output by up to 600% ",
      "Smooth performance while preventing distortion with optimized audio processing",
      "Responsive popup UI with a slider for dynamic volume adjustment.",
    ],
    techStack: ["React", "Typescript", "Tailwind CSS", "Web Audio API", "GainNode", "Audio processing"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-300 shadow-lg rounded-lg p-6 bg-blue-50 w-full md:w-1/2">
      <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
      <p className="text-gray-700 mt-2">{project.description}</p>

      <h4 className="mt-4 font-semibold text-gray-800">Key Features:</h4>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
        {project.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <h4 className="mt-4 font-semibold text-gray-800">Tech Stack:</h4>
      <p className="text-gray-700">{project.techStack.join(", ")}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-white text-gray-900 py-4 px-6 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Projects</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {project.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
