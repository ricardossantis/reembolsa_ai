import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

export const MaxSearch = styled(Search)`
  width: 240px;
  height: 38px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const MinSearch = styled(Search)`
  width: 200px;
  height: 38px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
