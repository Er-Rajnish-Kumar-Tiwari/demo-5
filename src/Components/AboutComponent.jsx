import React from "react";

const AboutComponent = () => {
  return (
    <section className="w-full bg-white">
      {/* TOP ABOUT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Whirling Image */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 animate-spin-slow">
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
              alt="solar agriculture"
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="farm"
              className="absolute inset-0 w-full h-full object-cover rounded-full rotate-45 opacity-80"
            />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <p className="text-green-600 text-sm font-semibold mb-2 uppercase">
            About Integrated Power Solution
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nurturing a Greener Tomorrow, Rooted in
            <span className="text-green-600"> Tradition & Innovation</span>
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            At Integrated Power Solution, we believe in harmonizing age-old
            wisdom with cutting-edge technology for the betterment of our
            planet and its people.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to empower farmers and communities through clean
            energy, sustainable agriculture, and innovative solar solutions
            that protect our future.
          </p>

          <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
            More About Us
          </button>
        </div>
      </div>

      {/* BOTTOM CULTURAL LEGACY SECTION */}
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Gradient Content */}
          <div className="bg-gradient-to-r from-[#1f6b4e] to-[#4fa64f] text-white px-10 py-16 h-[400px]">
            <h3 className="text-2xl font-bold mb-4">
              Our Cultural Legacy
            </h3>

            <p className="text-sm mb-6 text-gray-100">
              Our heritage blends India’s agricultural roots with sustainable
              solar innovation, bridging tradition and technology.
            </p>

            <ul className="space-y-3 text-sm">
              <li>✔ Deeply rooted in Indian agricultural values</li>
              <li>✔ Solar energy aligned with nature</li>
              <li>✔ Eco-friendly solutions for rural India</li>
            </ul>

            <button className="mt-6 bg-white text-green-700 px-5 py-2 rounded-md font-semibold">
              Our Heritage
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
              alt="solar home"
              className="w-full object-cover h-[400px]"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                ▶
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 18s linear infinite;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutComponent;
