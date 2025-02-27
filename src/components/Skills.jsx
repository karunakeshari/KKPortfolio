import React from "react";
import { TbBinaryTree } from "react-icons/tb";
import { IoServerOutline } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { FaMicrosoft } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiThealgorithms,
  SiRedux,
  SiReactrouter,
  SiTypescript,
} from "react-icons/si";

function Skills() {
  const skillsItems = [
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-blue-500 text-4xl" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500 text-4xl" />,
    },
    { name: "Redux", icon: <SiRedux className="text-blue-500 text-4xl" /> },
    { name: "React Router", icon: <SiReactrouter className="text-blue-500 text-4xl"/> },
    { name: "Tailwind CSS", icon: <RiTailwindCssLine className="text-blue-500 text-4xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-blue-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "Data Structures", icon: <TbBinaryTree className="text-blue-500 text-4xl"/> },
    { name: "Algorithms", icon: <SiThealgorithms className="text-blue-500 text-4xl" /> },
    { name: "DBMS", icon: <IoServerOutline  className="text-blue-500 text-4xl" /> },
    { name: "Core Java", icon: <FaJava className="text-blue-500 text-4xl" /> },
    { name: "C++", icon: <BiLogoCPlusPlus className="text-blue-500 text-4xl" /> },
    { name: "Computer Network", icon: <TbWorldWww className="text-blue-500 text-4xl" /> },
    { name: "Operating System", icon: <FaMicrosoft className="text-blue-500 text-4xl" /> },
    { name: "Figma", icon: <FaFigma className="text-blue-500 text-4xl" /> },
  ];
  return (
  <section className="px-8 py-4 bg-white ">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">My Skills 💻</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skillsItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-1 bg-blue-50 rounded-lg shadow-lg"
          >
            {item.icon}
            <p className="text-lg font-semibold text-black mt-1">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
