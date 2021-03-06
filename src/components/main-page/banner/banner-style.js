import styled from "styled-components";
import BannerImg from '../../../images/banner.jpg';
import BannerImgMobile from '../../../images/banner.jpg';

export const MaxBoxBanner = styled.div`
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  color: #ffffff;
  height: 600px;
`;

export const BoxSVG = styled.div`
  padding: 1rem;
`;

export const MinBoxSVG = styled.div`
  padding: 2rem;
`;
export const MinBoxBanner = styled.div`
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: 110% 120%;
  background-color: #365083;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #ffffff;
  @media only screen and (max-width: 450px){
    background-image: url(${BannerImgMobile});
    background-size: 200% 130%;
  }
`;

export const MaxContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-self: flex-end;
  width: 50%;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 10rem;
`;

export const MinContent = styled(MaxContent)`
  display: flex;
  text-align: left;
  align-self: flex-end;
  width: 39%;
  margin-right: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 20px;
  flex-wrap: wrap;
  @media only screen and (max-width: 450px){
    visibility: hidden;
  }
`;

export const CompanyInfo = styled.div`
  margin-top: 2rem;
  height: 400px;
  font-size: 30px;
  color: #000000;
  display: flex;
  justify-content: flex-around;
`;

export const MinCompanyInfo = styled(CompanyInfo)`
  height: 250px;
  margin-bottom: 1rem;
`;

export const MaxInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BoxInfo = styled.div`
  padding: 4rem;
`;

export const MinInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MinBoxInfo = styled.div`
  padding: 1rem;
`;

export const MiniBanner = styled.img `
@media only screen and (min-width: 300px){
    width: 90vw;
  }
`
