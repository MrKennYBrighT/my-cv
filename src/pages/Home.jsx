import { motion } from "framer-motion";
import { useSectionObserver } from "../store/useSectionObserver";
import { Typewriter } from "react-simple-typewriter";
import confetti from "canvas-confetti";

export default function Home() {
  useSectionObserver("home");

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
      >
        Hi, I'm Kehinde Olorunda 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl"
      >
        <Typewriter
          words={[
            "Front-End Developer crafting responsive, accessible, and beautiful web experiences.",
            "React Enthusiast. UI/UX Lover. Code Artist.",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </motion.p>

      <motion.a
  href="/Kehinde-Olorunda-CV.pdf"
  download="Kehinde-Olorunda-CV.pdf"
  onClick={handleDownload}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
>
  Download CV
</motion.a>

    </section>
  );
}
