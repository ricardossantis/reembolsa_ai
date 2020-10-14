import React from "react";
import { useWindowSize } from "../../system-general/header/hookWindowSize.js";
import Button from "../home-button";
import {
  MaxBoxBanner,
  MinBoxBanner,
  MaxContent,
  MinContent,
  BoxSVG,
  BoxInfo,
  MinBoxInfo,
  MaxInfo,
  MinInfo,
  MinBoxSVG,
  CompanyInfo,
  MinCompanyInfo,
  MiniBanner,
} from "./banner-style.js";

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
      )) ||(
        <>
          <MinBoxBanner>
            <MinBoxSVG>
            </MinBoxSVG>
            <MinContent>
              <div>{props.bannerTxt1}</div>
              <div>{props.bannerTxt2}</div>
              { width <= 450 ? <div></div>: <Button bckButton="#F1548D" />}
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
