import styled from "styled-components";
import { Form } from "antd";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const Box = styled.div`
  @media (max-width: 670px) {
    padding: 0;
    margin: 0;
  }
`;
export { StyledForm, Box };
