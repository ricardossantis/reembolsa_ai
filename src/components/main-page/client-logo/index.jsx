import React from "react";
import {Card, MaxLogo, MinLogo, CLogo, CpLogo, MinCLogo, MinCpLogo} from "./client-style.js";

import { useWindowSize } from "../../system-general/header/hookWindowSize.js";

const ClientLogo = (props) => {
  const width = useWindowSize().width;

  return (
    <>
      {(width > 768 && (
        <Card> 
        <MaxLogo>
          <CLogo>
            <CpLogo>{props.logo1}</CpLogo>
          </CLogo>
          <CLogo>{props.logo2}</CLogo>
          <CLogo>{props.logo3}</CLogo>
          <CLogo>{props.logo4}</CLogo>
        </MaxLogo>
        </Card>
      )) || (
        
        <Card>
          <MinLogo>
            <MinCLogo>
              <MinCpLogo>{props.logo1}</MinCpLogo>
            </MinCLogo>
            <MinCLogo>{props.logo2}</MinCLogo>
          </MinLogo>
          <MinLogo>
            <MinCLogo>
              <MinCpLogo>{props.logo1}</MinCpLogo>
            </MinCLogo>
            <MinCLogo>{props.logo2}</MinCLogo>
          </MinLogo>
          </Card>
      
      )}
    </>
  );
};

export default ClientLogo;
