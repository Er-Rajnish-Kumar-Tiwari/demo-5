import React from "react";
import { FaHandsHelping, FaMedal, FaHandshake } from "react-icons/fa";

const OurValues = () => {
  return (
    <section className="w-full bg-[#e5e9e7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            OUR <span className="text-green-600">VALUES</span>
          </h2>
          <p className="text-gray-600 text-sm">
            At Integrated Power Solution, Our Core Values Guide Everything We Do. We Believe In:
          </p>
          <div className="w-10 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Service */}
          <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
            <FaHandsHelping className="text-green-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">Service</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We are dedicated to delivering exceptional services in both solar
              and sustainable agro sectors. Our customer-first approach ensures
              seamless support, customized solutions, and long-term value.
            </p>
          </div>

          {/* Quality */}
          <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
            <FaMedal className="text-green-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">Quality</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We maintain an unwavering commitment to top-tier quality across
              all solar and agro solutions. Our standards ensure reliability,
              durability, and sustainable performance for every project.
            </p>
          </div>

          {/* Reliability */}
          <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
            <FaHandshake className="text-green-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">Reliability</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our comprehensive solutions ensure energy independence and
              resilient agricultural practices. We build long-term trust
              through dependable systems and consistent support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurValues;
