import React from "react";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {children}
    </motion.main>
  );
};

export default Layout;
