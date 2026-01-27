import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title:
      "India’s Renewable Energy Boom: Record 25 GW Growth and Future Prospects",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    author: "richpc",
    date: "April 14, 2025",
  },
  {
    id: 2,
    title: "Understanding Soil pH and Its Impact on Crop Productivity",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    author: "richpc",
    date: "March 24, 2025",
  },
  {
    id: 3,
    title:
      "Reliable Power for Hospitals: Rich Phytocare Panels Reduce Costs & Outages",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    author: "richpc",
    date: "March 14, 2025",
  },
];

const OurBlogs = () => {
  return (
    <section className="w-full py-10 bg-gray-200 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-green-600 font-semibold uppercase tracking-wide">
          Our Blog
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Our Latest Blog
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
        {/* Left Blogs */}
        <div className="lg:col-span-2 space-y-2">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-48 object-cover"
              />

              <div className="p-5 flex flex-col justify-between">
                <div className="flex items-center text-sm text-gray-500 gap-4 mb-2">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-green-600" />
                    By {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-green-600" />
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3>

                <button className="mt-3 flex items-center gap-2 text-green-600 font-medium hover:gap-3 transition-all">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Featured Blog */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
          <img
            src={blogs[2].image}
            alt={blogs[2].title}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 gap-4 mb-3">
              <span className="flex items-center gap-1">
                <FaUser className="text-green-600" />
                By {blogs[2].author}
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="text-green-600" />
                {blogs[2].date}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {blogs[2].title}
            </h3>

            <button className="flex items-center gap-2 text-green-600 font-medium hover:gap-3 transition-all">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default OurBlogs;
