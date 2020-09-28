import { Input } from "antd";
import styled from "styled-components";

const StyledInputPassword = styled(Input.Password)`
  width:100%;
  :focus {
    border-color: #365083;
    border-right-width: 1px !important;
}
`;
export default StyledInputPassword