import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-black sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="animate-pulse text-2xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
          MB
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-white">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-all  border-b-2 ${
                  isActive
                    ? "text-blue-600 border-blue-600"
                    : "text-white border-transparent hover:border-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl  text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block font-medium border-l-4 pl-2 py-1 ${
                  isActive
                    ? "text-blue-600 border-blue-600"
                    : "text-white border-transparent hover:border-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
