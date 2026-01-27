import React from "react";
import { FaBolt, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-indigo-200 shadow-md px-8 py-6 flex items-center justify-between">
      
      {/* Logo + Company Name */}
      <div className="flex items-center gap-2">
        <FaBolt className="text-green-600 text-2xl" />
        <a className="text-xl font-bold text-gray-800" href="/">
          INTEGRATED POWER SOLUTION
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <a
          href="/about"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium"
        >
          <FaInfoCircle />
          About
        </a>

        <a
          href="/contact"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium"
        >
          <FaPhoneAlt />
          Contact
        </a>

        <a
          href="/services"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium"
        >
          <FaEnvelope />
          Services
        </a>

        <a
          href="/testimonials"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium"
        >
          <FaUser />
          Testimonials
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
