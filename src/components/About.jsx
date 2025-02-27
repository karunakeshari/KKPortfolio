import React from "react";
import myImage from "../myImage.jpg"
import { FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function About() {
  const downloadResume = () => {
    const resumeUrl = "/Resume.pdf"; // Ensure this is inside the public folder
    const anchor = document.createElement("a");
    anchor.href = resumeUrl;
    anchor.setAttribute("download", "Karuna_Resume.pdf");
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center bg-white text-black py-10 px-6 mt-4 min-h-screen">
      <div className="md:w-3/4 text-center md:text-left">
        <h1 className="text-4xl font-bold">Hello, It's me</h1>
        <h2 className="text-5xl font-extrabold text-blue-500 mt-2">
          Karuna Keshari
        </h2>
        <h3 className="text-2xl font-semibold mt-2">
          And I'm a <span className="text-blue-500">Frontend Developer</span>
        </h3>
        <p className="mt-4 text-black-300">
          I specialize in creating modern, interactive, and responsive websites
          with a great user experience. As a frontend developer and working
          professional with 1.5 years of experience at HSBC, I have expertise in
          React, Javascript, Typescript, and Tailwind CSS. I focus on building
          scalable UI components, enhancing web performance, and ensuring
          seamless user interactions with clean, modern development practices.
        </p>
        <div className="flex flex-row mt-5 gap-4">
          <FaLinkedin
            size={30}
            className="text-blue-600"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/karunakeshari/",
                "_blank"
              )
            }
          />
          <FaGithub
            size={30}
            className="text-blue-600"
            onClick={() =>
              window.open("https://github.com/karunakeshari", "_blank")
            }
          />
          <SiLeetcode
            size={30}
            className="text-blue-600"
            onClick={() =>
              window.open("https://leetcode.com/u/karunakeshari/", "_blank")
            }
          />
          <FaTwitter
            size={30}
            className="text-blue-600"
            onClick={() =>
              window.open("https://x.com/Karunakeshari1", "_blank")
            }
          />
        </div>
        <div className="flex gap-4 justify-center md:justify-start mt-6">
          <button className="btn btn-primary" onClick={downloadResume}>
            Download CV
          </button>
        </div>
      </div>
      <div className="md:w-1/4 flex justify-center mr-10 md:mt-5">
        <div className="relative w-480 h-48 md:w-56 md:h-56">
          <img
            src={myImage}
            alt="Profile"
            className="rounded-full border-4 border-blue-400 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
