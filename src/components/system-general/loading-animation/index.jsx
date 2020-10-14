import React from "react";
import { motion } from "framer-motion";

const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "#365083",
  margin:"0 10px",
  borderRadius:"100px",
};
const loadingContainer = {
  width: "100%",
  height: "100vh",
  display: "flex",
  "align-items":"center",
  justifyContent: "center",
};
const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};
const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const LoadingAnimation = () => {
 return <motion.div
    style={loadingContainer}
    variants={loadingContainerVariants}
    initial="start"
    animate="end"
  >
    <motion.span
      style={loadingCircle}
      variants={loadingCircleVariants}
      transition={loadingCircleTransition}
    />
    <motion.span
      style={loadingCircle}
      variants={loadingCircleVariants}
      transition={loadingCircleTransition}
    />
    <motion.span
      style={loadingCircle}
      variants={loadingCircleVariants}
      transition={loadingCircleTransition}
    />
    <motion.span
      style={loadingCircle}
      variants={loadingCircleVariants}
      transition={loadingCircleTransition}
    />
  </motion.div>;
};
export default LoadingAnimation;
