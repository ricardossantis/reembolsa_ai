import React from "react";
import { ButtonBox, Cancel, Confirm } from "./button-style.js";

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const SystemButton = (props: ButtonProps) => (
  <ButtonBox>
    <Cancel onClick={props.onClick} />

    <Confirm onClick={props.onClick} />
  </ButtonBox>
);

export default SystemButton;
