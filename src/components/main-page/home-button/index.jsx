import React from "react";
import { useHistory } from "react-router-dom";
import { ZButton } from "./home-button-style.js";

const Button = (props) => {
  const history = useHistory();
  return (
    <ZButton
      style={{ backgroundColor: props.bckButton }}
      onClick={() => history.push("/cadastro")}
    >
      Quero participar
    </ZButton>
  );
};

export default Button;
