import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useSectionObserver } from "../store/useSectionObserver";
import { useState } from "react";

export default function Contact() {
  useSectionObserver("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-[#0a192f] text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-xl mx-auto text-gray-300 mb-12"
      >
        Whether you have a project in mind, a question, or just want to say hi—my inbox is always open.
      </motion.p>

      <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-start space-y-6 text-left"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400" size={20} />
            <span className="text-sm text-gray-300">kehindeolorunda1000@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-400" size={20} />
            <span className="text-sm text-gray-300">+234 706 111 9792</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400" size={20} />
            <span className="text-sm text-gray-300">Ondo, Nigeria</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {["name", "email", "message"].map((field) => (
            <div key={field} className="relative">
              <motion.label
                initial={false}
                animate={{
                  y: formData[field] ? -20 : 0,
                  scale: formData[field] ? 0.85 : 1,
                  color: formData[field] ? "#3b82f6" : "#9ca3af",
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-4 top-2 text-sm pointer-events-none origin-left"
              >
                {field === "name"
                  ? "Your Name"
                  : field === "email"
                  ? "Your Email"
                  : "Your Message"}
              </motion.label>
              {field !== "message" ? (
                <input
                  type={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full bg-[#112240] text-white px-4 pt-6 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              ) : (
                <textarea
                  name={field}
                  rows="4"
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full bg-[#112240] text-white px-4 pt-6 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              )}
            </div>
          ))}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(59,130,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition relative overflow-hidden"
          >
            <span className="relative z-10">Send Message</span>
            <span className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-20 transition"></span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
