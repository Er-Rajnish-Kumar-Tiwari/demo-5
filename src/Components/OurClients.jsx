import React from "react";

const clients = [
  {
    id: 1,
    name: "Indian Oil",
    img: "https://www.iocl.com/assets/images/logo.png",
  },
  {
    id: 2,
    name: "Government of Assam",
    img: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png",
  },
  {
    id: 3,
    name: "CREDA",
    img: "https://www.iocl.com/assets/images/logo.png",
  },
  {
    id: 4,
    name: "TEDA",
    img: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png",
  },
  {
    id: 5,
    name: "DGVCL",
    img: "https://www.iocl.com/assets/images/logo.png",
  },
  {
    id: 6,
    name: "Power Utility",
    img: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png",
  },
];


const OurClients = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-green-600 font-semibold uppercase text-sm">
            Our Clients
          </p>

          <h2 className="text-4xl font-bold mt-3 mb-6 leading-snug">
            Building Strong, Long <br /> Lasting Relationships
          </h2>

          <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-md hover:opacity-90 transition">
            CLIENT LIST
          </button>
        </div>

        {/* RIGHT SIDE LOGOS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="border rounded-md bg-white flex items-center justify-center p-6 hover:shadow-md transition"
            >
              <img
                src={client.img}
                alt={client.name}
                className="h-14 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurClients;
