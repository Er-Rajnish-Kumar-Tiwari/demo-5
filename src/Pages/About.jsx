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
              src="https://picsum.photos/seed/agro/600/400"
              alt="Green Energy"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h6 className="text-green-600 font-semibold uppercase mb-2">
              Rich Phytocare Leading the Way In
            </h6>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cultivating a Greener Tomorrow
            </h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-6">
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
                About Company
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100">
                Our Mission
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100">
                Our Vision
              </button>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At Rich Phytocare, we believe in harmonizing agro wisdom and
              cutting-edge technology for the betterment of our planet and its
              people. Born from a deep respect for the land and a commitment to
              sustainable progress, we serve as a bridge between modern
              innovation and traditional agricultural values.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Rich Phytocare is not just a business; it is a movement towards a
              more sustainable, eco-friendly India. We aim to revolutionize the
              way farming and energy consumption are viewed, bringing a holistic
              approach to modern challenges.
            </p>
          </div>
        </div>

        {/* OUR HERITAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          {/* Text */}
          <div>
            <h6 className="text-green-600 font-semibold uppercase mb-2">
              Our Heritage
            </h6>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Rich Phytocare
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Although the globe grows on its orbit, its dynamism and vibrancy
              depend on the pathways of growth. Gifted with an instinct to
              understand this greatness of nature, Rich Phytocare brings the
              promising potential in the field of agriculture and green energy.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Agriculture is & has always been the most positive adventure, the
              noblest interaction of humanity with nature. We have always
              believed in eco-balance and sustainability while preserving
              nature’s wealth for future generations.
            </p>

            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              READ MORE
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
              alt="Solar Energy"
              className="rounded-lg shadow-lg max-w-sm"
            />
          </div>
        </div>
      </div>
      <CertificationsAndStats/>
    </div>
  );
};

export default About;
