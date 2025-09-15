import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiTool,
  FiFolder,
  FiBook,
  FiMail,
} from "react-icons/fi";
import { useNavStore } from "../store/navStore";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useNavStore((state) => state.activeSection);

  const navLinks = [
    { name: "Home", href: "#home", icon: FiHome },
    { name: "Skills", href: "#skills", icon: FiTool },
    { name: "Projects", href: "#projects", icon: FiFolder },
    { name: "Education", href: "#education", icon: FiBook },
    { name: "Contact", href: "#contact", icon: FiMail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a192f]/80 backdrop-blur-sm py-2 shadow-md"
          : "bg-[#0a192f] py-4"
      } text-white`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center w-auto h-[60px]">
          <img
            src="/cvlogo-horizontal.png"
            alt="Kehinde Olorunda Logo"
            className="max-h-[50px] w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  className={`transition duration-300 flex items-center gap-1 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#00BFFF] font-semibold"
                      : "hover:text-[#00BFFF]"
                  }`}
                >
                  <Icon
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  {link.name}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00BFFF] transition-all duration-300 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform duration-300"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-[#0a192f] z-50 px-6 pt-20 space-y-6 text-sm font-medium shadow-lg"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block transition duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[#00BFFF] font-semibold"
                        : "hover:text-[#00BFFF]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
