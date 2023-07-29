import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        style={{ minHeight: "780vh", marginTop: "10vh" }}
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
};

export default Layout;
