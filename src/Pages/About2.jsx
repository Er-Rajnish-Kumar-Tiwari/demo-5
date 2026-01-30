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

      {/* GENERATION CAPACITY */}
      <section
        className="w-full py-20 text-white"
        style={{ background: "linear-gradient(90deg, #1f3d1f, #2e5f2e)" }}
      >
        <h2 className="text-center font-bold mb-12 uppercase tracking-wide">
          Our Generation Capacity
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Experience & Reach</h3>
            <div className="grid grid-cols-2 gap-6">
              <Stat number="14+" label="Years of Experience" />
              <Stat number="500+" label="Projects Completed" />
              <Stat number="3+" label="Client Segments" />
              <Stat number="5+" label="States Served" />
            </div>
          </div>

          {/* Solar */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solar Installations</h3>
            <div className="grid grid-cols-2 gap-6">
              <Stat number="500+" label="Happy Customers" />
              <Stat number="3000+" label="Solar Panels Installed" />
              <Stat number="1000+" label="KW Installed Capacity" />
              <Stat number="24/7" label="Service & Support" />
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
          Over the years, Integrated Power Solutions has expanded its solar
          operations across multiple states in India, delivering reliable
          installations and strong after-sales service support.
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
            </ul>
            <ul className="space-y-2">
              <li>• Gujarat</li>
              <li>• Maharashtra</li>
              <li>• Odisha</li>
              <li>• Chhattisgarh</li>
              <li>• Assam</li>
            </ul>
          </div>

          {/* India Map */}
          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppKZbncM5DErpWBQIEqoKzisiE_MxLoJQ8Q&s"
              alt="India Map"
              className="max-w-sm opacity-90"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsAndStats;
