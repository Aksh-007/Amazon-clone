import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: -800, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <Header />

      <motion.div
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        style={{
          minHeight: "78vh",
          marginTop: "10vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
};

export default Layout;
