import styled from 'styled-components';

const AlterButton = styled.button `
background-color: #365083;
border: 0.5px solid #122752;
box-shadow: 2px 2px 5px #707070;
border-radius: 10px;
color: #ffffff;
margin-top: 20px;
 &:hover{
    background-color: #2CBFD3;
    border: 0.5px solid #1b95a6;
 }
`

const ContentContainer = styled.div `
font-size: 1.2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: left;
`

const ButtonContainer = styled.div `
font-size: 1.3rem;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

export {AlterButton, ContentContainer, ButtonContainer}