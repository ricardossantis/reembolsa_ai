import styled from 'styled-components';
import {Form} from 'antd';

const StyledForm = styled(Form) `
display: flex;
flex-direction: column;
margin: auto;
justify-content: center;
align-items:center;
width: 80%;
@media(max-width: 670px){
    width: 70%;
    height: 50vw;
    display: flex;
    flex-direction: column;
    margin: auto;
}
`
export{StyledForm}
