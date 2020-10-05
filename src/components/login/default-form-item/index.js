import { Form } from "antd";
import styled from "styled-components";
const DefaultFormItem = styled(Form.Item)`
  width: 80%;
  @media (min-width: 770px) {
    width: 45%;
  }
`;
export default DefaultFormItem;
