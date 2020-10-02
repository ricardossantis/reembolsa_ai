import React from "react";
import { CancelBox, Cancel} from "./cancel-style.js";

const CancelButton = (props) => {
  return (
    <CancelBox>
      <Cancel onClick={props.cancel} />
    </CancelBox>
  );
};

export default CancelButton;
