import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    text:
      "INTEGRATED POWER SOLUTION facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.",
    name: "Arjun Nair",
    city: "Kochi",
  },
  {
    id: 2,
    text:
      "Investing in solar high mast lighting with INTEGRATED POWER SOLUTION transformed our community. Safe, eco-friendly and reliable lighting.",
    name: "Priya Sundar",
    city: "Chennai",
  },
  {
    id: 3,
    text:
      "Excellent service and top-quality solar products. Their installation team was professional and responsive throughout the project.",
    name: "Ramesh Patel",
    city: "Ahmedabad",
  },
  {
    id: 4,
    text:
      "INTEGRATED POWER SOLUTION helped us reduce energy costs while improving farm productivity. Great experience overall.",
    name: "Sandeep Verma",
    city: "Indore",
  },
  {
    id: 5,
    text:
      "From consultation to execution, everything was smooth. Their solar solutions are reliable and future-ready.",
    name: "Anita Roy",
    city: "Kolkata",
  },
  {
    id: 6,
    text:
      "Very satisfied with the solar lighting project. Maintenance support is excellent and timely.",
    name: "Mohammed Ali",
    city: "Hyderabad",
  },
];

const TestimonialsPage = () => {
  const [index, setIndex] = useState(0);

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
          href="/contact"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition"
        >
          Contact Us
        </a>
      </section>
    </section>
  );
};

export default TestimonialsPage;
