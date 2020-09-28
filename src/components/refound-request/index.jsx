import React from "react";
import { Form, Input, Select, Button, DatePicker, InputNumber } from "antd";
import styled from "styled-components";
import {
  StyledTriagle1,
  StyledTriagle2,
  StyledAside,
  StyledInput,
  StyledForm,
  StyledConfirmButton,
  StyledButton,
  StyledH1,
} from "./styled-refound";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 3,
  },
};

const { Option } = Select;

const RefoundRequest = () => {
  return (
    <div>
      <StyledForm {...layout} name="nest-messages">
        <StyledH1>Novo Reembolso</StyledH1>

        <Form.Item label="Categoria">
          <Input.Group compact>
            <Form.Item
              name={["Categoria", "tipos"]}
              noStyle
              rules={[{ required: true, message: "Categoria é necessária" }]}
            >
              <Select placeholder="Escolha uma categoria">
                <Option value="Transporte">Transporte</Option>
                <Option value="Alimentacao">Alimentação</Option>
                <Option value="Hospedagem">Hospedagem</Option>
                <Option value="Combustivel">Combustível</Option>
                <Option value="Outros">Outros</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item label="Valor">
          <InputNumber
            defaultValue={0}
            formatter={(value) =>
              `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>

        <Form.Item label="Data">
          <DatePicker />
        </Form.Item>

        <Form.Item name={["user", "introduction"]} label="Descrição">
          <StyledInput />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <StyledButton type="primary" htmlType="submit">
            <StyledTriagle1 />
          </StyledButton>
          <StyledButton type="primary" htmlType="submit">
            <StyledTriagle2 />
          </StyledButton>
        </Form.Item>
      </StyledForm>
    </div>
  );
};

export default RefoundRequest;

const StyledRefound = styled.div`
  /* width: 100% */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2%;
  margin-right: 5%;
  float: right;
  // width: 23vw;
  // height: 40vw;
  // @media (min-width: 300px) and (max-width: 500px){
  //   width: 100%;
  // }
`;
const StyledFormRefound = styled(StyledRefound)`
  display: flex;
  flex-direction: row;
  @media (min-width: 501px) and (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    margin-left: 0%;
    margin-top: 20%;
  }

  @media (min-width: 319px) and (max-width: 500px) {
    margin: 20%;
    flex-direction: column;
    top: -50%;
    left: 15%;
  }
`;
