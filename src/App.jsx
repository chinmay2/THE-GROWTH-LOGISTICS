import companyInfo from "./data/companyInfo";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaTruck,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaGlobe,
  FaHeadset,
  FaShieldAlt,
  FaUsers,
  FaShippingFast,
  FaPlane,
  FaWarehouse,
  FaShip,
} from "react-icons/fa";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3r00ka",
        "template_zj5v3ga",
        form.current,
        "TVR3jZvuso7XBl6uV"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  const services = [
    {
      title: "Ocean Freight",
      icon: <FaShip />,
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
      description:
        "The Growth Logistics provides expert ocean freight forwarding solutions, seamlessly connecting your global supply chain across major international shipping lanes. We offer both FCL and LCL options with secure vessel space and optimized routing.",
    },

    {
      title: "Air Freight",
      icon: <FaPlane />,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
      description:
        "Reliable air freight services for urgent and time-sensitive cargo movement worldwide with fast transit times and dependable airline partnerships.",
    },

    {
      title: "Transportation",
      icon: <FaTruck />,
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2070&auto=format&fit=crop",
      description:
        "Domestic and regional transportation solutions with safe and timely delivery services including FTL and LTL logistics support.",
    },

    {
      title: "Custom Clearance",
      icon: <FaFileAlt />,
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      description:
        "Fast and hassle-free customs clearance services ensuring smooth international cargo movement without delays.",
    },

    {
      title: "Warehousing",
      icon: <FaWarehouse />,
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
      description:
        "Secure and organized warehousing solutions with inventory management and distribution support for modern supply chains.",
    },

    {
      title: "Value-Added Service",
      icon: <FaShippingFast />,
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop",
      description:
        "Comprehensive logistics support tailored for modern supply chain operations with customer-focused solutions.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">

        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          <div className="flex items-center gap-4">

            <img
              src="/logo/logo.png"
              alt="logo"
              className="w-20 h-20 object-contain"
            />

            <div>

              <h1 className="text-3xl font-bold text-teal-600">
                {companyInfo.companyName}
              </h1>

              <p className="text-gray-500 text-sm">
                {companyInfo.tagline}
              </p>

            </div>

          </div>

          <div className="hidden md:flex gap-8 font-medium">

            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>

            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>

            <a href="#services" className="hover:text-orange-500 transition">
              Services
            </a>

            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>

          </div>

          <a
            href="https://wa.me/918928968560"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Get Quote
          </a>

        </div>

      </nav>

      {/* Hero */}
      <section
  id="home"
  className="relative min-h-screen text-white flex items-center pt-24 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')",
  }}
>
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-7xl mx-auto">

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-4xl"
  >

    <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
      Global Logistics Solutions
    </span>

    <h1 className="text-7xl font-extrabold leading-tight mt-8">
      Delivering Logistics
      <span className="block text-orange-400">
        With Trust & Precision
      </span>
    </h1>

    <p className="mt-8 text-xl text-gray-200 leading-9 max-w-3xl">
      End-to-end freight forwarding, transportation,
      customs clearance and warehousing solutions
      connecting businesses across domestic and
      international markets.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="#contact"
        className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold shadow-xl"
      >
        Request A Quote
      </a>

      <a
        href="https://wa.me/918928968560"
        target="_blank"
        rel="noreferrer"
        className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition"
      >
        WhatsApp Us
      </a>

    </div>

    {/* STATS */}

    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-16">

      <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">

        <h3 className="text-4xl font-bold text-orange-400">
          100+
        </h3>

        <p className="mt-2">
          Connected POD's
        </p>

      </div>

      <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">

        <h3 className="text-4xl font-bold text-orange-400">
          100+
        </h3>

        <p className="mt-2">
          Shipments Delivered
        </p>

      </div>

      <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">

        <h3 className="text-4xl font-bold text-orange-400">
          98%
        </h3>

        <p className="mt-2">
          On-Time Delivery
        </p>

      </div>

      <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">

        <h3 className="text-4xl font-bold text-orange-400">
          5+
        </h3>

        <p className="mt-2">
          Years Experience
        </p>

      </div>

    </div>

  </motion.div>

</div>

        

        </div>

      </section>

      {/* ABOUT US */}
      <section
        id="about"
        className="py-24 bg-gradient-to-r from-slate-100 to-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">

            {/* LEFT */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-12">

              <p className="uppercase tracking-[4px] text-orange-400 font-semibold mb-4">
                About The Growth Logistics
              </p>

              <h2 className="text-5xl font-extrabold leading-tight mb-8">
                Smart Logistics Solutions
                <span className="block text-orange-400">
                  Built For Modern Business
                </span>
              </h2>

              <p className="text-lg leading-9 text-gray-200 mb-8">

                The Growth Logistics is a trusted logistics and freight
                forwarding company delivering seamless transportation
                solutions across domestic and international markets.

              </p>

              <p className="text-lg leading-9 text-gray-200 mb-10">

                From ocean freight and air cargo to transportation,
                customs clearance, and warehousing, we provide complete
                end-to-end logistics support tailored to your business.

              </p>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="bg-white/10 rounded-2xl p-5">

                  <h3 className="text-3xl font-bold text-orange-400 mb-2">
                    24/7
                  </h3>

                  <p>Shipment Support</p>

                </div>

                <div className="bg-white/10 rounded-2xl p-5">

                  <h3 className="text-3xl font-bold text-orange-400 mb-2">
                    Global
                  </h3>

                  <p>Worldwide Network</p>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative min-h-[600px] overflow-hidden bg-gray-900">

              {/* MAIN IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                alt="about"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* TOP BADGE */}
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-6 rounded-3xl shadow-2xl">

                <h3 className="text-5xl font-extrabold text-orange-400">
                  5+
                </h3>

                <p className="text-white text-lg mt-2">
                  Years Experience
                </p>

              </div>

              {/* CENTER CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-10">

                <div className="bg-white/15 backdrop-blur-md p-6 rounded-full border border-white/20 mb-6 shadow-2xl">

                  <FaTruck className="text-5xl text-white" />

                </div>

                <h2 className="text-5xl font-extrabold leading-tight text-white">

                  Global Freight

                  <span className="block text-orange-400 mt-2">
                    Moving Forward
                  </span>

                </h2>

                <p className="mt-6 text-lg text-gray-200 max-w-md leading-8">

                  Smart freight forwarding solutions designed for modern businesses,
                  ensuring reliability, speed, and seamless global connectivity.

                </p>

              </div>

              {/* BOTTOM STATS */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%]">

                <div className="grid grid-cols-3 gap-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl text-center">

                  <div>

                    <h3 className="text-4xl font-bold text-orange-400">
                      100+
                    </h3>

                    <p className="text-gray-200 mt-2">
                      Shipments Delivered
                    </p>

                  </div>

                  <div>

                    <h3 className="text-4xl font-bold text-orange-400">
                      20+
                    </h3>

                    <p className="text-gray-200 mt-2">
                      Global Clients
                    </p>

                  </div>

                  <div>

                    <h3 className="text-4xl font-bold text-orange-400">
                      24/7
                    </h3>

                    <p className="text-gray-200 mt-2">
                      Support Available
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 bg-fixed bg-center bg-cover relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-white">
              Service We Provide
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl min-h-[420px] shadow-2xl bg-white"
              >

                {/* IMAGE */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                ></div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* CONTENT */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">

                  <div className="text-5xl text-orange-500 mb-6 group-hover:text-white transition duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-gray-900 group-hover:text-white transition duration-500">
                    {service.title}
                  </h3>

                  <p className="leading-8 text-gray-700 group-hover:text-white transition duration-500">
                    {service.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* COUNTER */}
      <section
        className="py-24 bg-fixed bg-center bg-cover relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center text-white">

            <div>
              <h2 className="text-6xl font-bold text-orange-400">100+</h2>
              <p className="mt-4 text-xl">Connected POD’s</p>
            </div>

            <div>
              <h2 className="text-6xl font-bold text-orange-400">100+</h2>
              <p className="mt-4 text-xl">Shipment Delivered</p>
            </div>

            <div>
              <h2 className="text-6xl font-bold text-orange-400">98+</h2>
              <p className="mt-4 text-xl">On-Time Delivery Rate</p>
            </div>

            <div>
              <h2 className="text-6xl font-bold text-orange-400">5+ Years</h2>
              <p className="mt-4 text-xl">Industry Experience</p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Why Choose Us
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <FaFileAlt />,
                title: "Fast Documentation",
              },

              {
                icon: <FaShippingFast />,
                title: "Competitive Freight Rates",
              },

              {
                icon: <FaGlobe />,
                title: "Global Shipping Network",
              },

              {
                icon: <FaUsers />,
                title: "Experienced Operations Team",
              },

              {
                icon: <FaHeadset />,
                title: "Real-Time Shipment Support",
              },

              {
                icon: <FaShieldAlt />,
                title: "Safe Cargo Handling",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-8 rounded-3xl"
              >

                <div className="text-5xl text-orange-400 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 bg-teal-700 text-white"
      >

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* INFO */}
          <div>

            <h2 className="text-4xl font-bold mb-8">
              Contact Us
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-start gap-4">

                <FaMapMarkerAlt className="mt-1 text-orange-400" />

                <p>{companyInfo.address}</p>

              </div>

              <div className="flex items-center gap-4">

                <FaPhoneAlt className="text-orange-400" />

                <p>{companyInfo.phone}</p>

              </div>

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-orange-400" />

                <p>{companyInfo.email}</p>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl">

            <h3 className="text-3xl font-bold mb-6 text-teal-700">
              Request A Quote
            </h3>

            <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-5"
>

  <input
    type="text"
    name="user_name"
    placeholder="Name"
    required
    className="w-full border p-4 rounded-lg"
  />

  <input
    type="text"
    name="company"
    placeholder="Company"
    className="w-full border p-4 rounded-lg"
  />

  <div className="grid md:grid-cols-2 gap-4">

    <input
      type="text"
      name="mobile"
      placeholder="Mobile"
      required
      className="w-full border p-4 rounded-lg"
    />

    <input
      type="email"
      name="user_email"
      placeholder="Email"
      required
      className="w-full border p-4 rounded-lg"
    />

  </div>

  <div className="grid md:grid-cols-2 gap-4">

    <input
      type="text"
      name="pol"
      placeholder="POL (Port Of Loading)"
      className="w-full border p-4 rounded-lg"
    />

    <input
      type="text"
      name="pod"
      placeholder="POD (Port Of Destination)"
      className="w-full border p-4 rounded-lg"
    />

  </div>

  <div className="grid md:grid-cols-2 gap-4">

    <input
      type="text"
      name="commodity"
      placeholder="Commodity"
      className="w-full border p-4 rounded-lg"
    />

    <input
      type="text"
      name="weight"
      placeholder="Weight (KG / MT)"
      className="w-full border p-4 rounded-lg"
    />

  </div>

  <select
    name="container_type"
    className="w-full border p-4 rounded-lg bg-white"
  >
    <option value="">
      Select Container Type
    </option>

    <option value="20FT Standard">
      20FT Standard
    </option>

    <option value="40FT Standard">
      40FT Standard
    </option>

    <option value="40FT High Cube">
      40FT High Cube
    </option>

    <option value="Reefer Container">
      Reefer Container
    </option>

    <option value="Open Top Container">
      Open Top Container
    </option>

    <option value="Flat Rack Container">
      Flat Rack Container
    </option>

    <option value="LCL Shipment">
      LCL Shipment
    </option>

    <option value="Air Cargo">
      Air Cargo
    </option>

  </select>

  <textarea
    rows="5"
    name="message"
    placeholder="Message"
    required
    className="w-full border p-4 rounded-lg"
  ></textarea>

  <button
    type="submit"
    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold w-full transition"
  >
    Submit Quote
  </button>

</form>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">

        <p>
          © 2026 {companyInfo.companyName}. All Rights Reserved.
        </p>

      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918928968560"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >

        <FaWhatsapp className="text-white text-3xl" />

      </a>

    </div>
  );
}

export default App;
