import React from "react";
import { ButtonBox, Cancel, Confirm } from "./button-style.js";

interface ButtonProps {
  cancel: () => void;
  confirm: () => void;
}

const SystemButton = (props: ButtonProps) => {
  return (
    <ButtonBox>
      <Cancel onClick={props.cancel} />

      <Confirm onClick={props.confirm} />
    </ButtonBox>
  );
};

export default SystemButton;
