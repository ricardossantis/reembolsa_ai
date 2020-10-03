import React from "react";
import { TitleInfo } from "./title-style.js";

const Title = (props) => {
  return (
    <TitleInfo
      style={{ color: props.colorTitle, backgroundColor: props.bckTitle }}
    >
      {props.children}
    </TitleInfo>
  );
};

export default Title;
