import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavStore } from "../store/navStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useNavStore((state) => state.activeSection);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
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
        scrolled ? "bg-[#0a192f]/80 backdrop-blur-sm py-2 shadow-md" : "bg-[#0a192f] py-4"
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
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#00BFFF] font-semibold"
                    : "hover:text-[#00BFFF]"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-4 text-sm font-medium bg-[#0a192f]">
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
        </ul>
      )}
    </header>
  );
};

export default Navbar;
