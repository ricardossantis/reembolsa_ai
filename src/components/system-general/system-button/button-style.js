import styled from "styled-components";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

export const ButtonBox = styled.div`
  background-color: #f5f5f5;
  font-size: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Cancel = styled(CloseCircleFilled)`
  color: red;
  font-weight: bolder;
  color: #f15454;
`;

export const Confirm = styled(CheckCircleFilled)`
  font-weight: bolder;
  color: #2cbfd3;
`;
