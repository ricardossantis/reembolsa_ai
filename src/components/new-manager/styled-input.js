import styled from 'styled-components';
import {Input} from 'antd';

const StyledInput = styled(Input) `
    border-radius: 5px;
    width: 45vw;
    @media(max-width: 670px){
        width: 70vw;
    }
`
const StyledInputPassword = styled(Input.Password) `
    border-radius: 5px;
    width: 45vw;
    @media(max-width: 670px){
        width: 70vw;
    }
`
export {StyledInput, StyledInputPassword}