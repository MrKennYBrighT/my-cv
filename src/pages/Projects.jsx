import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useSectionObserver } from "../store/useSectionObserver";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek, mobile-first personal site built with React and Tailwind CSS. Includes project showcase, blog, and contact form.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://kenny-portfolio.vercel.app",
    github: "https://github.com/kenny/portfolio",
  },
  {
    title: "Simple Calculator",
    description:
      "A lightweight calculator built with semantic HTML, custom CSS, and vanilla JavaScript. Supports basic arithmetic operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://kenny-calculator.vercel.app",
    github: "https://github.com/kenny/simple-calculator",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application built with HTML, CSS, and JavaScript. Features multiple-choice questions and score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://kenny-quiz.vercel.app",
    github: "https://github.com/kenny/quiz-app",
  },
  {
    title: "Movie Database",
    description:
      "A responsive movie explorer built with Vite + React, Tailwind CSS, and TMDB API. Includes search, filters, and dynamic routing.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "TMDB API", "Vite", "React"],
    live: "https://kenny-movies.vercel.app",
    github: "https://github.com/kenny/movie-database",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Projects() {
  useSectionObserver("projects");
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-[#0a192f] text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-2xl mx-auto text-gray-300 mb-12"
      >
        Here are some of the projects I’ve built to solve real problems and explore new technologies.
      </motion.p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto perspective">
        {projects.map((project, i) => {
          const isFlipped = flippedIndex === i;
          return (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onClick={() => setFlippedIndex(isFlipped ? null : i)}
              className="relative w-full h-[300px] cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg bg-[#112240] text-left p-6 flex flex-col justify-between transform-style preserve-3d"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                </div>
                <p className="text-xs text-gray-500">Tap to view tech stack</p>
              </motion.div>

              <motion.div
                animate={{ rotateY: isFlipped ? 0 : -180 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg bg-[#1c2b4a] p-6 flex flex-col justify-between transform-style preserve-3d"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  rotateY: "180deg",
                }}
              >
                <ul className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-gray-800 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-auto justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition"
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition"
                    aria-label="GitHub repo"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
