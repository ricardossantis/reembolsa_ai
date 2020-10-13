import styled from 'styled-components';

const AlterButton = styled.button `
background-color: #365083;
border: 1px solid #122752;
border-radius: 10px;
color: #ffffff;
`

const ContentContainer = styled.div `
width: 300px;
font-size: 1.3rem;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const ButtonContainer = styled.div `
width: 200px;
font-size: 1.3rem;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

export {AlterButton, ContentContainer, ButtonContainer}