import React from "react";
import styled from "styled-components";
import Button from "../home-button";

const HireUs = (props) => {
  return (
    <Box>
      <RegisterButton>
        <Button bckButton="#F1548D" />
      </RegisterButton>

      <Logo id="#contato">Reembolsa.ai</Logo>
      <Text>
        {" "}
        <div>{props.text1}</div>
        <div>{props.text2}</div>
        <div>{props.text3}</div>
        <div>{props.text4}</div>
      </Text>
    </Box>
  );
};

export default HireUs;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterButton = styled.div`
  height: 6rem;
`;

const Logo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");
  font-family: "Cinzel", serif;
  font-size: 30px;
  text-decoration-line: underline;
  color: #365083;
  height: 6rem;
`;

const Text = styled.div`
  padding: 1rem;
  font-weight: bold;
  font-size: 22px;
  color: #365083;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 14rem;
`;
