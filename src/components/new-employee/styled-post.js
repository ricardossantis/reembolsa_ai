import styled from "styled-components";
import { Form, Input, Tooltip, Button } from "antd";

const ContainerForm = styled(Form)`
  border: 1px solid red;
  margin-top: 25%;
  height: 50%;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 15%;
    padding-top: 10%;

    div {
      width: 90%;
      margin: 0.2rem auto;
    }
  }
`;

export { ContainerForm };
