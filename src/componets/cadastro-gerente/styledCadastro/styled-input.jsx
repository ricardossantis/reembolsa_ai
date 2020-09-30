import styled from 'styled-components';
import {Input} from 'antd';

const StyledInput = styled(Input) `
    border-radius: 5px;
    height: 40px;
`
const StyledInputPassword = styled(Input.Password) `
    border-radius: 5px;
    height: 40px;
`
export {StyledInput, StyledInputPassword}