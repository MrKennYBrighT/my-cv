import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s cinematic intro
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a192f]"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold text-blue-400 animate-pulse"
            >
              Kehinde Olorunda
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <Layout>
          <Home />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </Layout>
      )}
    </>
  );
}

export default App;
