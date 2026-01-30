import React from "react";
import { FaBolt, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import logo from "../logo1.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav className="w-full bg-indigo-200 shadow-md px-8 py-6 flex items-center justify-between">
      
      {/* Logo + Company Name */}
      <div className="flex items-center gap-2">
        <a className="text-xl font-bold text-gray-800 cursor-pointer" onClick={()=>navigate('/')}>
          <img src={logo} alt="Company Logo" className="h-14 w-30 inline-block mr-2" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <a
          onClick={()=>navigate('/about')}
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium cursor-pointer"
        >
          <FaInfoCircle />
          About

        </a>

        <a
          onClick={()=>navigate("/contact")}
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium cursor-pointer"
        >
          <FaPhoneAlt />
          Contact
        </a>

        <a
          onClick={()=>navigate("/services")}
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium cursor-pointer"
        >
          <FaEnvelope />
          Services
        </a>

        <a
          onClick={()=>navigate("/testimonials")}
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium cursor-pointer"
        >
          <FaUser />
          Testimonials
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
