import styled from "styled-components";
import { Button } from "antd";

export const ButtonContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
`;

export const ZButton = styled(Button)`
  border: 0;
  width: 3.1rem;
  height: 3.1rem;
  background-color: #f5f5f5;
`;
