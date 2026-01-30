import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    text:
      "Integrated Power Solutions enabled a smooth transition to solar-powered water pumping at our site. The system is reliable, cost-effective, and has significantly reduced our electricity expenses.",
    name: "Arjun Nair",
    city: "Kochi, Kerala",
  },
  {
    id: 2,
    text:
      "The solar high mast lighting project delivered by Integrated Power Solutions has greatly improved safety and visibility in our area. The quality of work and execution was excellent.",
    name: "Priya Sundar",
    city: "Chennai, Tamil Nadu",
  },
  {
    id: 3,
    text:
      "We are extremely satisfied with the solar installation services. The team was professional, punctual, and used high-quality components throughout the project.",
    name: "Ramesh Patel",
    city: "Ahmedabad, Gujarat",
  },
  {
    id: 4,
    text:
      "Integrated Power Solutions helped us reduce energy costs while ensuring uninterrupted power for our agricultural operations. Their technical expertise is truly commendable.",
    name: "Sandeep Verma",
    city: "Indore, Madhya Pradesh",
  },
  {
    id: 5,
    text:
      "From initial consultation to final commissioning, the entire process was seamless. Their solar solutions are reliable, efficient, and future-ready.",
    name: "Anita Roy",
    city: "Kolkata, West Bengal",
  },
  {
    id: 6,
    text:
      "Excellent after-sales service and timely maintenance support. Integrated Power Solutions stands out for its commitment to quality and customer satisfaction.",
    name: "Mohammed Ali",
    city: "Hyderabad, Telangana",
  },
];


const TestimonialsPage = () => {
  const [index, setIndex] = useState(0);
  const navigate =useNavigate();

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 2) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 2
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 2) % testimonials.length);
  };

  const visible = testimonials.slice(index, index + 2);

  return (
    <section className="w-full min-h-screen bg-gray-300 pt-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Real stories from people who trusted INTEGRATED POWER SOLUTION for sustainable
            solar solutions.
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
            {visible.map((item) => (
              <div
                key={item.id}
                className="relative bg-yellow-50 p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl text-green-700 mb-4">“</div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.text}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.city}
                  </p>
                </div>

                <div className="absolute -bottom-6 right-6 bg-white rounded-full p-2 shadow-md">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                    alt="user"
                    className="w-12 h-12"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
       {/* ================= CTA ================= */}
      <section className="bg-yellow-100 py-16 text-center mt-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Want to Go Solar?
        </h3>
        <p className="text-gray-700 mb-6">
          Join hundreds of happy customers using clean & renewable energy.
        </p>
        <a
          onClick={()=>navigate("/contact")}
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition cursor-pointer"
        >
          Contact Us
        </a>
      </section>
    </section>
  );
};

export default TestimonialsPage;
