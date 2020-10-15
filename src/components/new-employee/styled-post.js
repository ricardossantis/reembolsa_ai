import styled from "styled-components";
import { Form } from "antd";
import { ButtonContainer } from "../../components/system-general/system-button/ant-button/ant-button-style.js";
const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    margin: 0.2rem auto;
  }

  @media (min-width: 320px) and (max-width: 1023px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (min-width: 1024px) and (max-width: 2400px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;

    div {
      width: 80%;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;

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

const FormBox = styled.div`
  height: 100vh;
  margin-top: 2rem;
`;

const LButton = styled(ButtonContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 10rem; */
`;

export { ContainerForm, Title, StyledForm, FormBox, LButton };
