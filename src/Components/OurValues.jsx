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
            At Integrated Power Solutions, our core values define our commitment
            to quality, sustainability, and customer satisfaction.
          </p>
          <div className="w-10 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Service */}
          <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
            <FaHandsHelping className="text-green-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">
              Customer-Centric Service
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We prioritize our customers by delivering end-to-end solar
              solutions, from system design and installation to servicing and
              maintenance. Our dedicated support ensures seamless execution and
              long-term value.
            </p>
          </div>

          {/* Quality */}
          <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
            <FaMedal className="text-green-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">
              Uncompromised Quality
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use only high-quality components from Tier 1 and Tier 2
              manufacturers, ensuring durability, efficiency, and reliable
              performance across all residential, commercial, and industrial
              solar projects.
            </p>
          </div>

          {/* Reliability */}
          <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
            <FaHandshake className="text-green-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">Trust & Reliability</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              With 14+ years of experience and 500+ successful installations, we
              build lasting relationships through dependable systems,
              transparent processes, and consistent after-sales support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
