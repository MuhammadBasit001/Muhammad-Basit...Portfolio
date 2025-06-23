import React from "react";

const skills = [
  { name: "HTML5", level: 95, color: "from-orange-400 to-red-500" },
  { name: "CSS3", level: 90, color: "from-blue-400 to-cyan-400" },
  { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
  { name: "React.js", level: 85, color: "from-sky-400 to-blue-500" },
  { name: "Node.js", level: 80, color: "from-emerald-400 to-green-500" },
  { name: "MongoDB", level: 75, color: "from-lime-400 to-green-500" },
  { name: "Bootstrap", level: 90, color: "from-pink-400 to-purple-400" },
  { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-teal-400" },
];

const Services = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#1d0b3a] to-[#391672] py-20 px-4 sm:px-10 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-2">
          Skills & Technologies
        </h2>
        <div className="w-28 h-1 mx-auto bg-blue-400 rounded mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gradient-to-br from-[#351558] to-[#1e1b60] p-5 rounded-lg shadow-md border border-purple-600"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <span className="text-lg font-bold text-white">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
