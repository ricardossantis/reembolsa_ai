import React, { useState, createRef } from "react";
import api from "../../services/api";
import { Form, Input, Cascader, DatePicker, InputNumber } from "antd";
import {
  RefoundPage,
  Body,
  Title,
  SubTitle,
  ButtonYes,
  ButtonContainer,
  NewForm,
} from "./refund-style";




const RefundRequest = () => {
  const formRef = createRef();
  const [componentSize, setComponentSize] = useState("default");

    const onFormLayoutChange = ({ size }) => {
    formRef.current.setFieldsValue(size);
  };

  const onFinish = (values) => {
    api.post("/refunds", values);
    console.log("Valores para o reembolso", values);
    formRef.current.resetFields();
  };
  
  return (
    <Body>
      <RefoundPage>
        <NewForm
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          onFinish={onFinish}
          ref={formRef}
          name="control-ref"
        >
          <Title>Novo Pedido de Reembolso</Title>
          <SubTitle>Categoria</SubTitle>

          <Form.Item
            background-color="#f5f5f5"
            name="category"
            value="category"
          >
            <Cascader
              placeholder="Escolha uma categoria"
              options={[
                {
                  value: "Alimentação",
                  label: "Alimentação",
                },
                {
                  value: "Transporte",
                  label: "Transporte",
                },
                {
                  value: "Hospedagem",
                  label: "Hospedagem",
                },
                {
                  value: "Combustível",
                  label: "Combustível",
                },
                {
                  value: "Outros",
                  label: "Outros",
                },
              ]}
            />
          </Form.Item>

          <SubTitle>Valor</SubTitle>

          <Form.Item name="value" value="value">
            <Input
              oninput="validity.valid||(value='');"
              type="number"
              min="0"
              placeholder="Insira um valor de reembolso"
            />
          </Form.Item>

          <SubTitle>Data</SubTitle>

          <Form.Item name="data" value="data">
            <DatePicker placeholder="Insira a data" />
          </Form.Item>

          <SubTitle>Descrição da despesa</SubTitle>

          <Form.Item name="text" value="text">
            <Input.TextArea placeholder="Descreva a natureza de seu reembolso" />
          </Form.Item>

          <>
            <Form.Item name="confirm" value="confirm">
              <ButtonContainer>
                <ButtonYes type="primary" htmlType="submit" />
              </ButtonContainer>
            </Form.Item>
          </>
        </NewForm>
      </RefoundPage>
    </Body>
  );
};

export default RefundRequest;
