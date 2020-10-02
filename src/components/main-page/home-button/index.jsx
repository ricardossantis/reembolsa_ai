import React from "react";
import { ZButton } from "./home-button-style.js";

const Button = (props) => {
  return (
    <ZButton style={{ backgroundColor: props.bckButton }} to="/cadastro">
      Quero participar
    </ZButton>
  );
};

export default Button;
