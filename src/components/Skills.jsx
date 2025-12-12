import React from "react";
// Import all the icons we need from react-icons
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiPostman,
  SiFirebase,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaCode } from "react-icons/fa";
import { TbLetterC, TbBrandCpp } from "react-icons/tb";
import { MdApi, MdOutlineDesignServices } from "react-icons/md";

// Updated skills array with an 'icon' property
const skills = [
   {
    title: "Node.js",
    desc: "JavaScript server runtime",
    icon: <FaNodeJs />,
  },
  
  { title: "HTML", desc: "Web structure language", icon: <FaHtml5 /> },
  { title: "CSS", desc: "Designs web appearance", icon: <FaCss3Alt /> },
  {
    title: "Javascript",
    desc: "Makes web interactive",
    icon: <SiJavascript />,
  },
  {
    title: "Typescript",
    desc: "JavaScript with types",
    icon: <SiTypescript />,
  },
  { title: "React.js", desc: "UI component library", icon: <SiReact /> },
  { title: "Redux Toolkit", desc: "State management", icon: <SiRedux /> },
  {
    title: "MySQL",
    desc: "Relational database management",
    icon: <SiMysql />,
  },
  {
    title: "MongoDB",
    desc: "NoSQL document database",
    icon: <SiMongodb />,
  },
  {
    title: "UI/UX",
    desc: "Designing user interfaces and experiences",
    icon: <MdOutlineDesignServices />,
  },
  { title: "C", desc: "Efficient system programming", icon: <TbLetterC /> },
  { title: "C++", desc: "Object-oriented C++", icon: <TbBrandCpp /> },
  {
    title: "Java",
    desc: "Object-oriented programming",
    icon: <FaJava />,
  },
  {
    title: "DSA",
    desc: "Data Structures & Algorithms",
    icon: <FaCode />,
  },
  { title: "RESTful APIs", desc: "Web service design", icon: <MdApi /> },
  { title: "Bootstrap", desc: "CSS framework", icon: <SiBootstrap /> },
  {
    title: "Tailwind CSS",
    desc: "Utility-first CSS framework",
    icon: <SiTailwindcss />,
  },
  { title: "Git", desc: "Version control tool", icon: <SiGit /> },
  { title: "Figma", desc: "Collaborative design tool", icon: <SiFigma /> },
  { title: "Postman", desc: "API testing tool", icon: <SiPostman /> },
  {
    title: "Firebase",
    desc: "Authentication and Authorization",
    icon: <SiFirebase />,
  },
  { title: "Express.js", desc: "Defining routes", icon: <SiExpress /> },
  {
    title: "Socket.io",
    desc: "Real-time communication",
    icon: <SiSocketdotio />,
  },
];

const Skills = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-xl font-semibold uppercase tracking-widest mb-8 text-gray-300">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          // Added flex utilities to center the icon and text
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 transition-transform duration-300 hover:scale-105"
          >
            {/* Icon wrapper: sets size and margin. Removed text-cyan-400 */}
            <div className="text-4xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
            <p className="text-sm text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;