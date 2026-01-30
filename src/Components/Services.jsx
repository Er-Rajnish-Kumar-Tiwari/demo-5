import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate=useNavigate();

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-3xl font-semibold text-green-600 uppercase mb-2">
            Our Services
          </p>
          <h2 className="text-3xl font-bold mb-2">
            INTEGRATED POWER SOLUTION’s Sustainable Offerings
          </h2>
          <div className="w-12 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* Service 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-32">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxe0ne2C250s9g5bCLsOtPm00mI5AbU30njg&s"
              alt="Solar Service"
              className="w-[320px] md:w-[420px] drop-shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Go Solar with Integrated Power Solutions
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Integrated Power Solutions delivers reliable solar energy systems
              for residential, commercial, and industrial needs. Since 2010, we
              have helped clients reduce electricity costs through high-quality
              solar installations and expert service support.
            </p>

            <button className="bg-green-600 text-white px-6 py-3 text-sm rounded-md hover:bg-green-700 transition">
              <a onClick={() => navigate("/services")}>Discover Solar Solutions</a>
            </button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Complete Solar Service & Maintenance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We provide comprehensive solar system servicing, including routine
              inspections, diagnostics, and performance optimization. Our
              maintenance solutions ensure long-term reliability and maximum
              efficiency of your solar investment.
            </p>

            <button className="bg-green-600 text-white px-6 py-3 text-sm rounded-md hover:bg-green-700 transition">
              <a onClick={() => navigate("/services")}>Explore Our Services</a>
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://www.shutterstock.com/image-photo/clean-energy-transportation-wind-turbine-600nw-2460260159.jpg"
              alt="Agro Service"
              className="w-[320px] md:w-[420px] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
