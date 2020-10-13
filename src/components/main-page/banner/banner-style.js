import styled from "styled-components";

export const MaxBoxBanner = styled.div`
  background-color: #365083;
  display: flex;
  justify-content: space-evenly;
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
  background-color: #365083;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

export const MaxContent = styled.div`
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

export const MinContent = styled(MaxContent)`
  margin-right: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 36px;
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
