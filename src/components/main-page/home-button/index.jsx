import React from "react";
import { useHistory } from "react-router-dom";
import { ZButton } from "./home-button-style.js";
import { motion } from "framer-motion";

const Button = (props) => {
  const history = useHistory();
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <ZButton
        style={{ backgroundColor: props.bckButton }}
        onClick={() => history.push("/cadastro")}
      >
        Quero participar
      </ZButton>
    </motion.div>
  );
};

export default Button;
