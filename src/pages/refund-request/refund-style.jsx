import styled from "styled-components";
import { Form } from "antd";

const FormContainer = styled.div`
  background: #f5f5f5;
  width: 100%;

  @media (min-width: 320px) and (max-width: 768px) {
    
    
    height: 640px;
    align-items: center;
    background: #f5f5f5;
   
    div {
      width: 237px;
      height: 35px;
    }
`;

const RefoundPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem auto;
  background: #f5f5f5;

  div {
    width: 521px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 237px;
    height: 640px;
    align-items: center;
    div {
      width: 237px;
      height: 35px;
    }
  }
`;

const NewForm = styled(Form)`
  margin-top: 3rem;
`;

const Title = styled.h1`
  width: 519px;
  height: 134px;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #365083;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 236px;
    height: 95px;
  }
`;

const SubTitle = styled.h3`
  width: 255px;
  height: 42px;
  left: 467px;
  top: 253px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #365083;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 116px;
    height: 29px;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: #f15454;
  border: none;
  border-radius: 100%;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 46px;
    height: 40px;
  }
`;

const ButtonNo = styled(Button)`
  background-color: #f15454;
`;

const ButtonYes = styled(Button)`
  background-color: #2cd3b5;
`;

const ButtonContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 46px;
    height: 40px;
  }
`;

export {
  RefoundPage,
  FormContainer,
  Title,
  SubTitle,
  ButtonNo,
  ButtonYes,
  ButtonContainer,
  NewForm,
};
