import styled from "styled-components";
import { Form, Input } from "antd";

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

const StyledButton = styled.button`
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

const StyledConfirmButton = styled(StyledButton)`
  margin-top: 40%;
  @media (min-width: 351px) and (max-width: 800px) {
    width: 80vw;
    align-self: center;
    text-align: center;
    margin-top: 35%;
    margin-left: 10%;
  }
`;

const StyledTriagle1 = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid #eb5757;
`;

const StyledTriagle2 = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid #6fcf97;
`;

const StyledInput = styled(Input)`
  margin-left: 5px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 10vh;
  margin-bottom: 40%;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const StyledH1 = styled.h1`
  width: 23vw;
  text-align: center;
  height: 25vh;
  display: flex;
  @media screen and (max-width: 800px) {
    text-align: center;
    margin: auto;
    width: 80vw;
    margin-left: 10%;
    margin-top: 70%;
  }
`;

export {
  StyledTriagle1,
  StyledTriagle2,
  StyledAside,
  StyledInput,
  StyledForm,
  StyledConfirmButton,
  StyledButton,
  StyledH1,
};
