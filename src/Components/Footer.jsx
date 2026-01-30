import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBolt,
} from "react-icons/fa";
import logo from "../logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1f2d1f] text-white px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-80">

  {/* Company Info */}
  <div>
    <img src={logo} alt="Integrated Power Solutions Logo" className="h-auto object-contain mt-5" />
  </div>


  {/* Services */}
  <div className="mt-16">
    <h3 className="font-semibold mb-4 uppercase tracking-wide">
      Services
    </h3>
    <ul className="space-y-2 text-gray-300 text-sm">
      <li>› Solar Panel Installation</li>
      <li>› System Servicing & Maintenance</li>
      <li>› Performance Monitoring</li>
    </ul>
  </div>

  {/* Contact */}
  <div className="mt-16">
    <h3 className="font-semibold mb-4 uppercase tracking-wide">
      Contact Us
    </h3>
    <ul className="space-y-2 text-gray-300 text-sm mb-4">
      <li>› Head Office: Chennai</li>
      <li>› Dealer & Vendor Registration</li>
      <li>› Project Enquiries</li>
      <li>› Support & Maintenance</li>
    </ul>

    {/* Social Icons */}
<div className="flex gap-4 text-lg">
  <a
    href="https://www.facebook.com/profile.php?id=61586722840250"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-400 cursor-pointer"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/ipssolarsolutions/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-400 cursor-pointer"
  >
    <FaInstagram />
  </a>
</div>

  </div>
</div>

{/* Bottom Bar */}
<div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row items-center justify-center text-sm text-gray-300">
  <p>
    © {new Date().getFullYear()} Integrated Power Solutions. All Rights Reserved.
  </p>


</div>

    </footer>
  );
};

export default Footer;
