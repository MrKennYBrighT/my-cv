import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/kenny",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/kenny",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/kenny",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/kenny",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com/kenny",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://whatsapp.com/kenny",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    url: "https://telegram.org/kenny",
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full mt-20 py-10 px-4 sm:px-6 lg:px-8 bg-[#0a192f] text-center text-sm text-gray-400 border-t border-blue-900"
    >
      <div className="flex justify-center flex-wrap gap-x-6 gap-y-4 mb-6 relative">
        {socials.map(({ name, icon: Icon, url }) => (
          <motion.a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <Icon size={24} />
          </motion.a>
        ))}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(59,130,246,0.1), transparent 70%)",
            zIndex: 0,
          }}
        />
      </div>
      <p className="text-xs relative z-10">
        © {new Date().getFullYear()} Kehinde Olorunda. Built with React, Tailwind CSS, Framer Motion & Vite.
      </p>
    </motion.footer>
  );
}
