import { Form } from "antd";
import styled from "styled-components";
const DefaultFormItem = styled(Form.Item)`
    width:40%;
    @media screen and (max-width: 770px){
        width:80%;
    }
`;
export default DefaultFormItem;
