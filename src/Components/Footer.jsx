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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
            <img src={logo} alt="Logo" className="h-auto object-contain" />
        </div>

        {/* Solar Solutions */}
        <div className="mt-16">
          <h3 className="font-semibold mb-4 uppercase tracking-wide">
            Solar Solutions
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>› Solar EPC Solutions</li>
            <li>› Solar Water Pumps</li>
            <li>› Rooftop Solar Solutions</li>
            <li>› Solar High Mast Light</li>
          </ul>
        </div>

        {/* Agro Products */}
        <div className="mt-16">
          <h3 className="font-semibold mb-4 uppercase tracking-wide">
            Agro Products
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>› Organic Products</li>
            <li>› Water Soluble Fertilizers</li>
            <li>› Micronutrients Fertilizers</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-16">
          <h3 className="font-semibold mb-4 uppercase tracking-wide">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm mb-4">
            <li>› Offices</li>
            <li>› Vendor Registration</li>
            <li>› Dealer Registration</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            <FaFacebookF className="hover:text-green-400 cursor-pointer" />
            <FaInstagram className="hover:text-green-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-green-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()} Integrated Power Solution. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:text-green-400 cursor-pointer">Careers</span>
          <span>|</span>
          <span className="hover:text-green-400 cursor-pointer">Blog</span>
          <span>|</span>
          <span className="hover:text-green-400 cursor-pointer">Disclaimer</span>
          <span>|</span>
          <span className="hover:text-green-400 cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
