import styled from "styled-components";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export const ButtonBox = styled.div`
  background-color: #f5f5f5;
  font-size: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Cancel = styled(CloseOutlined)`
  font-weight: bolder;
  color: #f15454;
`;

export const Confirm = styled(CheckOutlined)`
  font-weight: bolder;
  color: #2cd3b5;
`;
