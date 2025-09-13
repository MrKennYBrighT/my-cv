import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFramer } from "react-icons/si";
import { useSectionObserver } from "../store/useSectionObserver";

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: FaGitAlt },
  { name: "Node.js", icon: FaNodeJs },
  { name: "npm", icon: FaNpm },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  useSectionObserver("skills");

  return (
    <section
      id="skills"
      className="py-20 px-4 text-center bg-[#0a192f] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Tech Stack & Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-2xl mx-auto text-gray-300 mb-12"
      >
        These are the tools and technologies I use to build fast, accessible, and beautiful web experiences.
      </motion.p>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            variants={itemVariants}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <Icon size={40} className="text-blue-400" />
            <span className="text-sm font-medium text-gray-300">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
