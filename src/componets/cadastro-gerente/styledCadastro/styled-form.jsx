import styled from 'styled-components';
import {Form} from 'antd';

const StyledForm = styled(Form) `
@media(max-width: 670px){
    width: 60%;
    height: 50vw;
    display: flex;
    flex-direction: column;
    margin: auto;
}
`
export{StyledForm}
