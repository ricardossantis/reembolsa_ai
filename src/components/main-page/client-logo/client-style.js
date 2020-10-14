import styled from "styled-components";

export const Card = styled.div`
  background-color: #365083;
`;
export const MaxLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #365083;
  height: 13rem;
`;

export const MinLogo = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #365083;
  height: 14rem;
  padding: 2rem;
`;

export const CLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 152px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const CpLogo = styled.div`
  font-size: 6rem;
`;

export const MinCLogo = styled(CLogo)`
  width: 120px;
  height: 122px;
`
export const MinCpLogo = styled(CpLogo)`
  font-size: 6rem;
`;

export const ImageLogo = styled.img `
  width: 100px;
`
