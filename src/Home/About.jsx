import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-2">
          About Me
        </h2>
        <div className="w-24 h-1 mx-auto bg-blue-400 rounded mb-10"></div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left: Description */}
          <div className="flex-1">
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate <strong>Full Stack Web Developer</strong> with expertise in modern web technologies. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg leading-relaxed">
              With a strong foundation in both frontend and backend development, I create seamless user experiences backed by robust server-side architecture.
            </p>

            {/* Stats */}
            <div className="mt-10 flex gap-6 flex-wrap">
              <div className="border border-purple-500 rounded-xl p-6 text-center w-40 bg-gradient-to-br from-[#3f0d5a] to-[#1e1b60] shadow-md">
                <p className="text-3xl font-extrabold text-blue-400">50+</p>
                <p className="text-sm text-gray-300 mt-1">Projects Completed</p>
              </div>
              <div className="border border-purple-500 rounded-xl p-6 text-center w-40 bg-gradient-to-br from-[#3f0d5a] to-[#1e1b60] shadow-md">
                <p className="text-3xl font-extrabold text-blue-400">2+</p>
                <p className="text-sm text-gray-300 mt-1">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right: What I Do Box */}
          <div className="flex-1 bg-gradient-to-br from-[#1e1b60] to-[#3f0d5a] p-6 rounded-xl shadow-lg border border-purple-500">
            <h3 className="text-2xl font-semibold text-white mb-4">What I Do</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                Frontend Development (React, HTML, CSS, JS)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                Backend Development (Node.js, Express)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pink-400"></span>
                Database Management (MongoDB)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-300"></span>
                Responsive Design (Bootstrap, Tailwind)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
