import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.div`
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

export const Buttons = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(54, 80, 131, 1);
  font-family: "Roboto";
  width: 50%;
  background-color: #ffffff;
  border: none;

  &.active {
    border: 1px solid black;
    border-radius: 5px;
    background-color: #e0e0e0 !important;
  }
`;

export const StyledGraph = styled.div`
  height: fitcontent;
  width: 80%;
`;

export const Message = styled.div`
  width: 80%;
  border: 1px solid black;
  height: 30%;
`;
