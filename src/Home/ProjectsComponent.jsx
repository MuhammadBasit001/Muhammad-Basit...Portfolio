import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN application with user authentication, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    image: "", // optional: add image URL or use placeholder
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Task Management App",
    description:
      "Responsive web application for managing tasks with drag-and-drop functionality.",
    techStack: ["React", "Tailwind CSS", "Local Storage"],
    image: "",
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather application with location-based forecasts and beautiful animations.",
    techStack: ["JavaScript", "CSS3", "Weather API"],
    image: "",
    codeLink: "#",
    demoLink: "#",
  },
];

const ProjectsComponent = () => {
  return (
 <section className="w-full min-h-screen bg-gradient-to-b from-[#1d0b3a] to-[#391672] py-20 px-4 sm:px-10 text-white">
     <h2 className="text-4xl font-bold text-center text-blue-400 mb-2">
          "Several projects are currently in development and will be published in this section shortly."
        </h2>
        </section>





    // <section className="w-full min-h-screen bg-gradient-to-b from-[#1d0b3a] to-[#391672] py-20 px-4 sm:px-10 text-white">
    //   <div className="max-w-7xl mx-auto">
    //     <h2 className="text-4xl font-bold text-center text-blue-400 mb-2">
    //       Featured Projects
    //     </h2>
    //     <div className="w-28 h-1 mx-auto bg-blue-400 rounded mb-12"></div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {projects.map((project, idx) => (
    //         <div
    //           key={idx}
    //           className="bg-gradient-to-br from-[#351558] to-[#1e1b60] rounded-lg overflow-hidden shadow-lg border border-purple-700 flex flex-col"
    //         >
    //           <div className="h-40 bg-gray-200 flex items-center justify-center">
    //             {/* Placeholder or image */}
    //             <span className="text-gray-400 text-2xl">📷</span>
    //           </div>
    //           <div className="p-5 flex flex-col justify-between flex-1">
    //             <div>
    //               <h3 className="text-xl font-bold text-white mb-2">
    //                 {project.title}
    //               </h3>
    //               <p className="text-sm text-gray-300 mb-4">
    //                 {project.description}
    //               </p>
    //               <div className="flex flex-wrap gap-2 mb-4">
    //                 {project.techStack.map((tech, i) => (
    //                   <span
    //                     key={i}
    //                     className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full"
    //                   >
    //                     {tech}
    //                   </span>
    //                 ))}
    //               </div>
    //             </div>
    //             <div className="flex gap-4 text-sm text-gray-300 mt-auto pt-4 border-t border-purple-700">
    //               <a href={project.codeLink} className="flex items-center gap-1 hover:text-white transition">
    //                 <FaCodeBranch /> Code
    //               </a>
    //               <a href={project.demoLink} className="flex items-center gap-1 hover:text-white transition">
    //                 <LuExternalLink /> Live Demo
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default ProjectsComponent;
