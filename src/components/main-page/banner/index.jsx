import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../../system-general/header/hookWindowSize.js";
import bckImage from "./banner-example.jpg";

const Banner = (props) => {
  const width = useWindowSize().width;

  return (
    <>
      {(width > 768 && (
        <BoxBanner>
          <MaxContent>
            <div>{props.bannerTxt1}</div>
            <div>{props.bannerTxt2}</div>
            <div>{props.bannerButton}</div>
          </MaxContent>
        </BoxBanner>
      )) || (
        <BoxBanner>
          <MinContent>
            <div>{props.bannerTxt1}</div>
            <div>{props.bannerTxt2}</div>
            <div>{props.bannerButton}</div>
          </MinContent>
        </BoxBanner>
      )}
    </>
  );
};

export default Banner;

const BoxBanner = styled.div`
  background-image: url(${bckImage});
  display: flex;
  border: 1px solid black;
  font-weight: bold;
  font-size: 48px;
  color: #365083;
  height: 800px;
`;

const MaxContent = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  margin-left: 12rem;
  margin-bottom: 10rem;
`;

const MinContent = styled(MaxContent)`
  margin-left: 8rem;
`;
