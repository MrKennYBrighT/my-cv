import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useSectionObserver } from "../store/useSectionObserver";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  useSectionObserver("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xvgbvdaw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 text-center ${
        darkMode ? "bg-[#0a192f] text-white" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      <Toaster position="top-center" />

      {/* Theme Toggle */}
      <div className="mb-6 text-right max-w-3xl mx-auto">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

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
        className={`max-w-xl mx-auto mb-12 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
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
            <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              kehindeolorunda1000@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-400" size={20} />
            <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              +234 706 111 9792
            </span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400" size={20} />
            <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Ondo, Nigeria
            </span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
          onSubmit={handleSubmit}
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
                  className={`w-full px-4 pt-6 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-[#112240] text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                  required
                />
              ) : (
                <textarea
                  name={field}
                  rows="4"
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full px-4 pt-6 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-[#112240] text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
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
            disabled={loading}
            className={`bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition relative overflow-hidden ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="relative z-10">
              {loading ? "Sending..." : "Send Message"}
            </span>
            <span className="absolute inset-0 bg-blue-500 opacity-10 hover:opacity-20 transition"></span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
