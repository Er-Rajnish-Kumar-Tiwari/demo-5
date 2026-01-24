import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    text:
      "Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.",
    name: "Arjun Nair",
    city: "Kochi",
  },
  {
    id: 2,
    text:
      "Investing in solar high mast lighting with Rich Phytocare transformed our community. Safe, eco-friendly and reliable lighting. Highly recommended! Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.",
    name: "Priya Sundar",
    city: "Chennai",
  },
  {
    id: 3,
    text:
      "Excellent service and top-quality solar products. Their installation team was professional and responsive throughout the project.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.",
    name: "Ramesh Patel",
    city: "Ahmedabad",
  },
  {
    id: 4,
    text:
      "Rich Phytocare helped us reduce energy costs while improving farm productivity. Great experience overall.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.",
    name: "Sandeep Verma",
    city: "Indore",
  },
  {
    id: 5,
    text:
      "From consultation to execution, everything was smooth. Their solar solutions are reliable and future-ready.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.",
    name: "Anita Roy",
    city: "Kolkata",
  },
  {
    id: 6,
    text:
      "Very satisfied with the solar lighting project. Maintenance support is excellent and timely.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.Rich Phytocare facilitated our transition to solar-powered water pumping seamlessly. Their team ensured reliable water access without electricity costs. Truly committed to sustainability.",
    name: "Mohammed Ali",
    city: "Hyderabad",
  },
];

const Testmonials = () => {
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
    <section className="w-full bg-green-900 py-16">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
          {visible.map((item) => (
            <div
              key={item.id}
              className="relative bg-yellow-50 p-6 rounded shadow-md"
            >
              <div className="text-3xl text-green-700 mb-3">“</div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {item.text}
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.city}</p>
              </div>

              <div className="absolute -bottom-6 right-6 bg-white rounded-full p-2 shadow">
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
    </section>
  );
};

export default Testmonials;
