import { Select } from "antd";
import styled from "styled-components";

const DefaultSelect = styled(Select)`
  width: 100%;
  :focus {
    border-color: #365083;
    border-right-width: 1px !important;
  }
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: #365083;
    border-right-width: 1px !important;
  }
    
}
`;
export default DefaultSelect;
