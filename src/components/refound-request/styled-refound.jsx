import styled from "styled-components";
import { Form, Input, DatePicker, InputNumber, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";

const PageTitle = styled.h1`
  width: 519px;
  height: 134px;

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

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #365083;
  }
`;

const CategoryTitle = styled.h2`
  width: 255px;
  height: 42px;

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

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #365083;
  }
`;

const ValueTitle = styled.h2`
  width: 255px;
  height: 42px;

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
    left: 64px;
    top: 230px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #365083;
  }
`;

const DataTitle = styled.h2`
  width: 255px;
  height: 41px;

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

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #365083;
  }
`;

const JustifyTitle = styled.h2`
  width: 519px;
  height: 41px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #365083;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 236px;
    height: 29px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #365083;
  }
`;

const FormCategory = styled(Form)`
  width: 521px;
  height: 30px;

  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 237px;
    height: 35px;

    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;

const InputCategory = styled(Input)`
  width: 521px;
  height: 30px;

  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 237px;
    height: 35px;

    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;

const CategoryInfo = styled(Select)`
  width: 521px;
  height: 30px;

  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 237px;
    height: 35px;

    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;

const ValueInfo = styled(InputNumber)`
  width: 521px;
  height: 49px;

  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 237px;
    height: 35px;

    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;

const DataInfo = styled(DatePicker)`
  width: 521px;
  height: 50px;

  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 237px;
    height: 35px;

    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;

const JustifyInfo = styled(TextArea)`
  height: 170px;
  text-align: top;
  width: 521px !important;

  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 237px;
    height: 120px;

    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;

const ButtonStyles = styled.button`
  border: none;
  font-size: 50px;
  background-color: transparent;
  text-align: center;
`;

const NoButton = styled(ButtonStyles)`
  width: 82px;
  height: 57px;
  color: #f15454;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 46px;
    height: 40px;
  }
`;

const OkButton = styled(ButtonStyles)`
  width: 79px;
  height: 57px;
  color: #2cd3b5;

  @media (min-width: 351px) and (max-width: 768px) {
    width: 46px;
    height: 40px;
  }
`;

const PageForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 770px;
  border: 2px solid red;
  background: #f5f5f5;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 360px;
    height: 640px;
    background: #f5f5f5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  border: 2px solid green;
`;

export {
  PageTitle,
  CategoryTitle,
  ValueTitle,
  DataTitle,
  JustifyTitle,
  CategoryInfo,
  FormCategory,
  InputCategory,
  ValueInfo,
  DataInfo,
  JustifyInfo,
  NoButton,
  OkButton,
  PageForm,
  ButtonContainer,
};
