import React from "react";

const Services = () => {
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
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
              alt="Solar Service"
              className="w-[320px] md:w-[420px] drop-shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Go Solar with Integrated Power Solution
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Embracing the power of the sun, Integrated Power Solution offers
              innovative solar solutions that illuminate lives while
              championing sustainability and reducing electricity costs.
            </p>

            <button className="bg-green-600 text-white px-6 py-3 text-sm rounded-md hover:bg-green-700 transition">
              <a href="/services">Discover Solar Solutions</a>
            </button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Sustainable Agro Solutions
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We provide high-quality agro products that promote sustainable
              farming practices. From eco-friendly fertilizers to plant growth
              enhancers, we help farmers grow healthier crops.
            </p>

            <button className="bg-green-600 text-white px-6 py-3 text-sm rounded-md hover:bg-green-700 transition">
              <a href="/services">Explore Agro Products</a>
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/agro/600/400"
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
