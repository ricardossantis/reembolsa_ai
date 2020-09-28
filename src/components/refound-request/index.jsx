import React from "react";
import { Form, Input, Select, DatePicker, InputNumber } from "antd";
import styled from "styled-components";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import {
  StyledNumber,
  StyledInput,
  StyledForm,
  StyledDenyButton,
  StyledConfirmButton,
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

        <Form.Item label="Valor R$">
          <InputNumber
            defaultValue={"0"}
            formatter={(value) =>
              ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
        <StyledData>
          <Form.Item label="Data">
            <DatePicker />
          </Form.Item>
        </StyledData>
        <Form.Item name={["user", "introduction"]} label="Descrição">
          <StyledInput />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <StyledDenyButton type="primary" htmlType="submit">
            <CloseCircleOutlined />
          </StyledDenyButton>
          <StyledConfirmButton type="primary" htmlType="submit">
            <CheckCircleOutlined />
          </StyledConfirmButton>
        </Form.Item>
      </StyledForm>
    </div>
  );
};

export default RefoundRequest;

const StyledData = styled.div`
  margin-left: 5px;
`;
