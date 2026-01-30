import React from "react";
import OurValues from "../Components/OurValues";
import CertificationsAndStats from "./About2";

const About = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <div
        className="w-full h-[260px] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-sm mt-2">
            Home / <span className="font-medium">About Us</span>
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1679917152773-588c2a0a9ad7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjBlbGVjdHJpY2l0eXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Green Energy"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h6 className="text-green-600 font-semibold uppercase mb-2">
              Integrated Power Solutions – Leading the Way in Solar Energy
            </h6>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Powering a Cleaner & Sustainable Tomorrow
            </h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-6">
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
                About Company
              </button>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Integrated Power Solutions, established in 2010, is a leading
              provider of solar energy systems offering end-to-end solutions for
              residential, commercial, and industrial clients across India.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With over 500+ successful solar projects, we specialize in system
              design, installation, servicing, and maintenance using
              high-quality components from Tier 1 and Tier 2 manufacturers to
              ensure long-term performance and energy savings.
            </p>
          </div>
        </div>

        {/* OUR HERITAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          {/* Text */}
          <div>
            <h6 className="text-green-600 font-semibold uppercase mb-2">
              Our Legacy
            </h6>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Integrated Power Solutions
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              For more than 14 years, Integrated Power Solutions has been
              committed to making solar energy affordable and accessible. Our
              journey is driven by innovation, technical expertise, and a strong
              belief in sustainable development.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We strive to reduce energy costs for our customers while
              contributing to a cleaner environment. By combining technology
              with responsible practices, we help build a greener future for
              generations to come.
            </p>

            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              READ MORE
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW4lMjBlbmVyZ3l8ZW58MHx8MHx8fDA%3D"
              alt="Solar Energy"
              className="rounded-lg shadow-lg max-w-sm"
            />
          </div>
        </div>
      </div>

      <CertificationsAndStats />
    </div>
  );
};

export default About;
