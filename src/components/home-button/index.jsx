import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <ZButton style={{ backgroundColor: props.bckButton }}>
      Quero participar
    </ZButton>
  );
};

export default Button;

const ZButton = styled.button`
  width: 200px;
  height: 35px;
  left: 1186px;
  top: 34px;
  color: #ffffff;
  font-weight: bold;
  font-size: 17px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(54, 80, 131, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  :hover {
    color: #365083;
  }
`;
