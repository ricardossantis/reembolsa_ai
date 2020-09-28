import styled from "styled-components";
import { Form, DatePicker } from "antd";

const StyledAside = styled.aside`
  height: 100vh;
  position: absolute;
  width: 40%;
  float: left;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 15vh;
    position: relative;
  }
`;

const StyledButton1 = styled.button`
  border: none;
  background-color: transparent;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 30px;
  text-align: center;
  @media (min-width: 501px) and (max-width: 800px) {
    width: 25%;
    margin-left: 45%;
    margin-top: 3%;
  }
  @media screen and (max-width: 500px) {
    width: 25%;
    margin-left: -30%;
    margin-top: 3%;
  }
`;

const StyledDenyButton = styled(StyledButton1)`
  margin-top: 40%;
  @media (min-width: 351px) and (max-width: 800px) {
    width: 80vw;
    align-self: center;
    text-align: center;
    margin-top: 35%;
    margin-left: 10%;
  }
`;

const StyledButton2 = styled.button`
  border: none;
  background-color: transparent;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 30px;
  text-align: center;
  @media (min-width: 501px) and (max-width: 800px) {
    width: 25%;
    margin-left: 45%;
    margin-top: 3%;
  }
  @media screen and (max-width: 500px) {
    width: 25%;
    margin-left: -30%;
    margin-top: 3%;
  }
`;

const StyledConfirmButton = styled(StyledButton2)`
  margin-top: 40%;
  @media (min-width: 351px) and (max-width: 800px) {
    width: 80vw;
    align-self: center;
    text-align: center;
    margin-top: 35%;
    margin-left: 10%;
  }
`;

const StyledInput = styled.input`
  margin-left: 5px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 200vh;
  height: 10vh;
  margin-bottom: 40%;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  display: flex;
  @media screen and (max-width: 800px) {
    text-align: center;
    margin: auto;
    width: 80vw;
    margin-left: 10%;
    margin-top: 70%;
  }
`;

const StyledNumber = styled.input`
  margin-left: 5px;
`;

export {
  StyledNumber,
  StyledAside,
  StyledInput,
  StyledForm,
  StyledDenyButton,
  StyledConfirmButton,
  StyledH1,
};
