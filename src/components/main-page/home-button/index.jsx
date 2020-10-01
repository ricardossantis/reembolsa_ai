import React from "react";
import { Link } from "react-router-dom";
import { ZButton } from "./home-button-style.js";

const Button = (props) => {
  return (
    <Link to="/cadastro">
      <button style={{ backgroundColor: props.bckButton }}>
        Quero participar
      </button>
    </Link>
  );
};

export default Button;
