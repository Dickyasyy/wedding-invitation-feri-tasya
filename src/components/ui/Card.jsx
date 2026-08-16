import React from "react";
import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  hover = false,
  padding = "p-6",
  ...props
}) => {
  return (
    <motion.div
      className={`
        bg-white rounded-2xl shadow-lg
        ${padding}
        ${hover ? "hover:shadow-xl transition-shadow duration-300" : ""}
        ${className}
      `}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
