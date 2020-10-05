import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

const StyledButtonRed  = styled(Link) `
color: red;
font-size: 2rem;
text-decoration: none;
`

const StyledButtonGreen  = styled(Button) `
color: green;
display: flex;
align-self: center;
margin-top: 10%;
font-size: 2rem;
text-decoration: none;
background-color: transparent;
border: none;
box-shadow: none;
&:hover{
    background-color: transparent;
    }
`

export {StyledButtonRed, StyledButtonGreen}