import React from "react";
import { MaxLogo, MinLogo, CLogo, CpLogo } from "./client-style.js";

import { useWindowSize } from "../../header/hookWindowSize.js";

const ClientLogo = (props) => {
  const width = useWindowSize().width;

  return (
    <>
      {(width > 768 && (
        <MaxLogo>
          <CLogo>
            <CpLogo>{props.logo1}</CpLogo>
          </CLogo>
          <CLogo>{props.logo2}</CLogo>
          <CLogo>{props.logo3}</CLogo>
          <CLogo>{props.logo4}</CLogo>
        </MaxLogo>
      )) || (
        <>
          <MinLogo>
            <CLogo>
              <CpLogo>{props.logo1}</CpLogo>
            </CLogo>
            <CLogo>{props.logo2}</CLogo>
          </MinLogo>
          <MinLogo>
            <CLogo>{props.logo3}</CLogo>
            <CLogo>{props.logo4}</CLogo>
          </MinLogo>
        </>
      )}
    </>
  );
};

export default ClientLogo;
