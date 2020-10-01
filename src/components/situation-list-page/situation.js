import styled from "styled-components";
import { Modal } from "antd";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.div`
  width: 80%;
  height: 10%;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgba(54, 80, 131, 1);
  font-family: "Roboto";
`;

export const SituationContainer = styled.div`
  width: 100%;
  height: 80%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SituationCardContainer = styled.div`
  width: 80%;
  height: 80px;

  :hover {
    cursor: pointer;
    background-color: rgba(74, 100, 151, 0.5);
    border: 1px solid rgba(74, 100, 151, 0.8);
    border-radius: 20px;
  }
`;

export const Title = styled.div`
  width: 80%;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  color: rgba(54, 80, 131, 1);
  font-family: "Roboto";
`;

export const TitleParagraph = styled.p`
  width: 50%;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;