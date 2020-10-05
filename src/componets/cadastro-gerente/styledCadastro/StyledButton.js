import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

const StyledButtonRed  = styled(Link) `
color: red;
font-size: 2rem;
text-decoration: none;
&:hover{
color: red;
}
`

const StyledButtonGreen  = styled(Button) `
color: green;
font-size: 2rem;
text-decoration: none;
background-color: transparent;
border: none;
`

export {StyledButtonRed, StyledButtonGreen}