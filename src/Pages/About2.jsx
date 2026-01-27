import React from "react";

const certifications = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnvVxVrsRSljWhCehvdeDBpvpDkklXIvIyw&s",
    title: "ISO 14001 Valid up to 2022",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnvVxVrsRSljWhCehvdeDBpvpDkklXIvIyw&s",
    title: "TNEB Enlistment Letter",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnvVxVrsRSljWhCehvdeDBpvpDkklXIvIyw&s",
    title: "ISO 9001 Valid up to 2022",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnvVxVrsRSljWhCehvdeDBpvpDkklXIvIyw&s",
    title: "ISO 45001 Valid up to 2022",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnvVxVrsRSljWhCehvdeDBpvpDkklXIvIyw&s",
    title: "MNRE Channel Partner Certificate",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnvVxVrsRSljWhCehvdeDBpvpDkklXIvIyw&s",
    title: "CRISIL Certificate",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnvVxVrsRSljWhCehvdeDBpvpDkklXIvIyw&s",
    title: "Prestigious CI Award for Rooftop Solar Excellence",
  },
];

const Stat = ({ number, label }) => (
  <div>
    <h4 className="text-2xl font-bold">{number}</h4>
    <p className="text-sm opacity-80">{label}</p>
  </div>
);

const CertificationsAndStats = () => {
  return (
    <div className="w-full">
      {/* CERTIFICATIONS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-center font-bold text-lg mb-12 uppercase tracking-wide">
          Certifications
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="border rounded-md p-3 shadow hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[260px] object-cover"
              />
              <p className="text-center text-sm mt-3 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GENERATION CAPACITY */}
      <section
        className="w-full py-20 text-white"
        style={{ background: "linear-gradient(90deg, #1f3d1f, #2e5f2e)" }}
      >
        <h2 className="text-center font-bold mb-12 uppercase tracking-wide">
          Our Generation Capacity
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Agro */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Agro</h3>
            <div className="grid grid-cols-2 gap-6">
              <Stat number="650+" label="Dealers" />
              <Stat number="45+" label="Agri Products" />
              <Stat number="17+" label="Years Industrial Presence" />
              <Stat number="3+" label="State Presence" />
            </div>
          </div>

          {/* Solar */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solar</h3>
            <div className="grid grid-cols-2 gap-6">
              <Stat number="16000+" label="Customers" />
              <Stat number="7000+" label="Solar Water Pumps" />
              <Stat number="7000+" label="Microgrid Systems" />
              <Stat number="60+" label="MW Total Installation" />
            </div>
          </div>
        </div>
      </section>

      {/* SALES & SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-center font-bold mb-4 uppercase tracking-wide">
          Our Sales & Services
        </h2>
        <p className="text-center text-sm text-gray-600 mb-12 max-w-3xl mx-auto">
          Over the years Rich Phytocare has been expanding its operations across
          India and continuing to grow with strong service presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          {/* States */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <ul className="space-y-2">
              <li>• Tamil Nadu</li>
              <li>• Kerala</li>
              <li>• Karnataka</li>
              <li>• Andhra Pradesh</li>
              <li>• Telangana</li>
              <li>• Uttar Pradesh</li>
            </ul>
            <ul className="space-y-2">
              <li>• Odisha</li>
              <li>• Chhattisgarh</li>
              <li>• Assam</li>
              <li>• Gujarat</li>
              <li>• Meghalaya</li>
              <li>• Maharashtra</li>
            </ul>
          </div>

          {/* India Map */}
          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppKZbncM5DErpWBQIEqoKzisiE_MxLoJQ8Q&s"
              alt="India Map"
              className="max-w-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsAndStats;
