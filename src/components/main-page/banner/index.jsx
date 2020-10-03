import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../../system-general/header/hookWindowSize.js";
import Button from "../home-button";
import SVGbanner from "./banner-svg.jsx";

const Banner = (props) => {
  const width = useWindowSize().width;

  return (
    <>
      {(width > 920 && (
        <>
          <MaxBoxBanner>
            <MaxContent>
              <div>{props.bannerTxt1}</div>
              <div>{props.bannerTxt2}</div>
              <Button bckButton="#F1548D" />
            </MaxContent>
            <BoxSVG>
              <SVGbanner widthSvg="980.49384" heightSvg="550" />
            </BoxSVG>
          </MaxBoxBanner>
          <CompanyInfo>
            <MaxInfo>
              <BoxInfo>
                <div>{props.info1}</div>
                <div>{props.info2}</div>
              </BoxInfo>
            </MaxInfo>
            <MaxInfo>
              <BoxInfo>
                <div>{props.info3}</div>
                <Button bckButton="#F1548D" />
              </BoxInfo>
            </MaxInfo>
          </CompanyInfo>
        </>
      )) || (
        <>
          <MinBoxBanner>
            <MinBoxSVG>
              <SVGbanner />
            </MinBoxSVG>
            <MinContent>
              <div>{props.bannerTxt1}</div>
              <div>{props.bannerTxt2}</div>
              <Button bckButton="#F1548D" />
            </MinContent>
          </MinBoxBanner>
          <MinCompanyInfo>
            <MinInfo>
              <MinBoxInfo>
                <div>{props.info3}</div>

                <Button bckButton="#F1548D" />
              </MinBoxInfo>
            </MinInfo>
          </MinCompanyInfo>
        </>
      )}
    </>
  );
};

export default Banner;

const MaxBoxBanner = styled.div`
  background-color: #365083;
  display: flex;
  justify-content: space-evenly;
  color: #ffffff;
  height: 600px;
`;

const BoxSVG = styled.div`
  padding: 1rem;
`;

const MinBoxSVG = styled.div`
  padding: 2rem;
`;
const MinBoxBanner = styled.div`
  background-color: #365083;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

const MaxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 55px;
  margin-left: 12rem;
  margin-bottom: 10rem;
`;

const MinContent = styled(MaxContent)`
  margin-right: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 36px;
`;

const CompanyInfo = styled.div`
  margin-top: 2rem;
  height: 400px;
  font-size: 30px;
  color: #000000;
  display: flex;
  justify-content: flex-around;
`;

const MinCompanyInfo = styled(CompanyInfo)`
  height: 250px;
  margin-bottom: 1rem;
`;

const MaxInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const BoxInfo = styled.div`
  padding: 4rem;
`;

const MinInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const MinBoxInfo = styled.div`
  padding: 1rem;
`;
