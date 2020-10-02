import styled from "styled-components";
import { Form, Input, Tooltip, Button } from "antd";

const ContainerForm = styled(Form)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;

  div {
    width: 100%;
    margin: 0.2rem auto;
  }

  @media (min-width: 320px) and (max-width: 1023px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 20%;
  }

  @media (min-width: 1024px) and (max-width: 2400px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 10%;

    div {
      width: 70%;
    }
  }
`;

const Title = styled.div`
  width: 100%;

  h1 {
    text-align: center;
    color: #365083;
    font-weight: bold;
  }

  h3 {
    color: #365083;
    font-weight: bold;
  }
`;

const StyledForm = styled(Form)`
  border: 1px solid blue;

  h1 {
    text-align: center;
    color: #365083;
    font-weight: bold;
  }
`;

const InputRadius = styled(Input)`
  border-radius: 5px;
  background-color: #f5f5f5;
`;

export { ContainerForm, Title, StyledForm, InputRadius };
