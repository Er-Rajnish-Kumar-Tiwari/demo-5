import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[260px] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-sm mt-2">
            Home / <span className="font-medium">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enquiry Form */}
          <div className="bg-white shadow-lg rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Enquiries</h2>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent!");
              }}
            >
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-green-600"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full mt-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-green-600"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Your Phone</label>
                <input
                  type="text"
                  placeholder="Enter your phone"
                  className="w-full mt-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-green-600"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full mt-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-green-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Contact Address</h2>

            <div className="space-y-6 text-gray-700">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-green-600 mt-1" />
                <p>
                  FLAT 2B, Mahalakshmi Enclaves, D.NO 26 Tank Bund Road,
                  Nungambakkam, Chennai – 600 034, Tamil Nadu, India
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-green-600 mt-1" />
                <p>04546 285887</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-green-600 mt-1" />
                <p>enquiry@richphytocare.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 shadow-lg rounded overflow-hidden">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6575241032717!2d80.2319459751238!3d13.071953590668573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d5c3b7f6df%3A0x1f6f1f6d3f6d3f6d!2sNungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1700020000000!5m2!1sen!2sin"
            className="w-full h-[350px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
