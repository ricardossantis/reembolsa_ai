import React from "react";
import {
  Card,
  MaxLogo,
  MinLogo,
  CLogo,
  MinCLogo,
  MinCpLogo,
  ImageLogo
} from "./client-style.js";

import { useWindowSize } from "../../system-general/header/hookWindowSize.js";

const ClientLogo = (props) => {
  const width = useWindowSize().width;

  return (
    <>
      {width > 768 ? (
        <Card>
          <MaxLogo>
            <CLogo>
              <ImageLogo src={props.logo1} alt="logo" />
            </CLogo>
            <CLogo><ImageLogo src={props.logo2} alt="logo" /></CLogo>
            <CLogo><ImageLogo src={props.logo3} alt="logo" /></CLogo>
            <CLogo><ImageLogo src={props.logo4} alt="logo" /></CLogo>
          </MaxLogo>
        </Card>
      ) : (
        <Card>
          <MinLogo>
            <MinCLogo>
              <MinCpLogo><ImageLogo src={props.logo1} alt="logo" /></MinCpLogo>
            </MinCLogo>
            <MinCLogo><ImageLogo src={props.logo2} alt="logo" /></MinCLogo>
          </MinLogo>
          <MinLogo>
            <MinCLogo>
              <MinCpLogo><ImageLogo src={props.logo3} alt="logo" /></MinCpLogo>
            </MinCLogo>
            <MinCLogo><ImageLogo src={props.logo4} alt="logo" /></MinCLogo>
          </MinLogo>
        </Card>
      )}
    </>
  );
};

export default ClientLogo;
