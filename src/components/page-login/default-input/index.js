import { Input } from "antd";
import styled from "styled-components";

const DefaultInput = styled(Input)`
  width:100%;
  :focus {
    border-color: #365083;
    border-right-width: 1px !important;
}
`;
export default DefaultInput