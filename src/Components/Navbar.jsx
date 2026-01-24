import React from "react";
import { FaBolt, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-6 flex items-center justify-between">
      
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
          href="/abouts"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium"
        >
          <FaInfoCircle />
          About
        </a>

        <a
          href="/contacts"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium"
        >
          <FaPhoneAlt />
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
