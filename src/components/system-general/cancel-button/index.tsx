import React from "react";
import { CancelBox, Cancel} from "./cancel-style.js";

interface CancelButton {
  cancel: () => void;
}

const CancelButton = (props: CancelButton) => {
  return (
    <CancelBox>
      <Cancel onClick={props.cancel} />
    </CancelBox>
  );
};

export default CancelButton;
