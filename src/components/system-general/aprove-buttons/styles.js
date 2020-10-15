import styled from 'styled-components';

const AproveButton = styled.button `
background-color: #2cbfd3;
border: 0.5px solid #2cbfd3;
box-shadow: 2px 2px 5px #707070;
border-radius: 10px;
color: #ffffff;
margin-top: 20px;
 &:hover{
    background-color: #5fd3e3 ;
    border: 0.5px solid #5fd3e3;
 }
`

const ReproveButton = styled(AproveButton) `
   background-color: #f15454;
   border: 0.5px solid #f15454;
   margin-left: 10px;
      &:hover{
         background-color: #ed6d6d ;
         border: 0.5px solid #ed6d6d;
      }
 }
`

export {AproveButton,ReproveButton}