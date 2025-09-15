import { motion } from "framer-motion";
import { useSectionObserver } from "../store/useSectionObserver";

const education = [
  {
    title: "B.Sc. Computer Science",
    institution: "Adekunle Ajasin University, Akungba-Akoko, Ondo State, Nigeria",
    year: "2012 - 2016",
    details: "Studied Computer Science.",
  },
  {
    title: "Professional Foundations",
    institution: "ALX Africa",
    year: "2025",
    details: "Completed a 3-month program focused on core professional skills including communication, self-leadership, and project execution. Built a strong foundation for success in tech and business environments.",
  },
  {
    title: "Front-End Developer Certificate",
    institution: "ALX Africa",
    year: "2025",
    details: "Completed a rigorous program covering JavaScript, HTML, CSS5, Zustand, Tailwind CSS, React accessibility, and performance.",
  }
];

export default function Education() {
  useSectionObserver("education");

  return (
    <section
      id="education"
      className="py-20 px-4 bg-[#0a192f] text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Education & Certifications
      </motion.h2>

      <div className="max-w-3xl mx-auto border-l-2 border-blue-400 pl-6 space-y-10">
        {education.map((item, i) => (
          <motion.div
            key={item.title}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -left-3 top-1 w-3 h-3 bg-blue-400 rounded-full"
            ></motion.div>
            <h3 className="text-xl font-semibold text-blue-300">
              {item.title}
            </h3>
            <p className="text-sm text-gray-300">
              {item.institution} • {item.year}
            </p>
            <p className="mt-2 text-gray-400 text-sm">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
