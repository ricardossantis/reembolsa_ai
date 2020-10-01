import React from "react";
import { ButtonBox, Cancel, Confirm } from "./button-style.js";

const SystemButton = (props) => {
  return (
    <ButtonBox>
      <Cancel onClick={props.cancel} />

      <Confirm onClick={props.confirm} />
    </ButtonBox>
  );
};

export default SystemButton;
