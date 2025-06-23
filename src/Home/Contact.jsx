import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // Recommended package
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6"; // This is OK
import { MdShoppingCart } from "react-icons/md"; // Corrected

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "your_service_id", // <-- Replace with your actual service ID
      "your_template_id", // <-- Replace with your actual template ID
      form.current,
      "your_public_key" // <-- Replace with your actual public key
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <section className="bg-gradient-to-r min-w-screen from-purple-900 to-slate-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto my-2"></div>
          <p className="text-gray-300">
            I'm always open to discussing new opportunities and interesting projects.
            Let's create something amazing together!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-tr from-purple-800 to-slate-800 rounded-md">
              <FaEnvelope className="text-2xl text-cyan-400" />
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-300">basitm743@gmail.com.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gradient-to-tr from-purple-800 to-slate-800 rounded-md">
              <FaPhoneAlt className="text-2xl text-cyan-400" />
              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-gray-300">+92 343 8979951</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gradient-to-tr from-purple-800 to-slate-800 rounded-md">
              <FaMapMarkerAlt className="text-2xl text-cyan-400" />
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-gray-300">Peshawer Pakistan</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-gradient-to-r from-cyan-400 to-purple-400 p-3 rounded-full text-white">
                <MdShoppingCart />
              </a>
              <a href="#" className="bg-gradient-to-r from-cyan-400 to-purple-400 p-3 rounded-full text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none text-white"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none text-white"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 rounded-md bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
