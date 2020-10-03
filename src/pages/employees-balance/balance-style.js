import styled from "styled-components";


export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Title = styled.div`
  font-weight: bold;
  color: #365083;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
`;
export const MinTitle = styled.div`
  font-weight: bold;
  color: #365083;
  font-size: 2rem;
  line-height: 29px;
  display: flex;
  justify-content: center;
`;
export const BoxCircle = styled.div`
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
`;

export const Circle = styled.div`
  font-weight: bold;
  font-size: 45px;
  color: #365083;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 428px;
  height: 428px;
  border: 10px solid #2cd3b5;
  border-radius: 14rem;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 15px #2cd3b5);
`;

export const MinCircle = styled(Circle)`
  font-weight: bold;
  font-size: 45px;
  color: #365083;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border: 10px solid #2cd3b5;
  border-radius: 14rem;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 15px #2cd3b5);
`;
