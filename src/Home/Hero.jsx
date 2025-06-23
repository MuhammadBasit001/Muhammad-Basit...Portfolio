import React from "react";
import profile from '../images/profile.jpeg'

const Hero = () => {
  return (
    <div>
      <section className="md:min-h-[calc(100vh-5rem)] py-4 md:pt-0  flex flex-col items-center justify-around text-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient text-white">
        <div className="md:w-2xl   flex justify-around gap-5 items-center flex-col">
        {/* Profile Image */}
        <div className="w-34 md:w-68 h-34 md:h-68 rounded-full  shadow-lg flex justify-center items-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          <img
            src={profile}
            alt="Profile"
            className="w-32 md:w-64 h-32 md:h-64 rounded-full  shadow-lg "
          />
        </div>

        <div>
          {/* Name */}
          <h1 className="text-4xl lg:text-6xl text-green-300 sm:text-5xl font-extrabold mb-2">
            Muhammad Basit
          </h1>

    

          {/* Profession */}
          <h2 className="text-xl sm:text-2xl font-medium mb-4">
            Web Developer
          </h2>
        </div>

        {/* Detail Paragraph */}
        <p className="max-w-xl text-base p-3 sm:text-lg mb-8">
          Passionate about building modern, responsive web apps with beautiful
          UIs and smooth UX. I love turning ideas into reality using the web.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#contact"
            className="relative px-8 py-4 bg-black text-xl  text-white hover:text-black font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            View My Work
          </a>
          <a
            href="#portfolio"
            className="relative px-8 py-4 bg-black text-xl  text-white hover:text-black font-semibold rounded-xl hover:bg-gray-100 transition"
          >
            Get in Touch    
          </a>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
