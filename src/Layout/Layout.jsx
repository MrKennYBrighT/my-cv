import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div
      className="w-screen min-h-screen overflow-x-hidden bg-[#0a192f] text-white flex flex-col scroll-smooth"
      role="document"
    >
      <Navbar />
      <main
        role="main"
        className="w-full max-w-screen-xl mx-auto px-4 flex-grow pt-20"
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
