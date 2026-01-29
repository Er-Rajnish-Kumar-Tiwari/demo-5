import React, { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    title: "INTEGRATED POWER SOLUTIONS",
    subtitle: "Reliable Solar Energy Systems Since 2010",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    title: "POWERING HOMES & BUSINESSES",
    subtitle: "Cost-Effective Solar Solutions for Residential, Commercial & Industrial Needs",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "CLEAN • SUSTAINABLE • FUTURE READY",
    subtitle: "500+ Successful Solar Projects Across India",
  },
];


const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt="hero"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
            <div className="text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
