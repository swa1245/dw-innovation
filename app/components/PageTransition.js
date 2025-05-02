"use client";
import { motion } from "framer-motion";

// Define animation variants
const pageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}