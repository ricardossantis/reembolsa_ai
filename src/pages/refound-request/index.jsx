import React, { useState } from "react";
import { Form, Input, Cascader, DatePicker, InputNumber } from "antd";
import {
  RefoundPage,
  Body,
  Title,
  SubTitle,
  CategoryContainer,
  ValueContainer,
  DataContainer,
  DescriptionContainer,
  ButtonNo,
  ButtonYes,
  ButtonContainer,
  NewForm,
} from "./refound-style";

const RefoundRequest = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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
        >
          <Title>Novo Pedido de Reembolso</Title>
          <SubTitle>Categoria</SubTitle>

          <Form.Item background-color="#f5f5f5">
            <Cascader
              placeholder="Escolha a categoria"
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

          <Form.Item>
            <InputNumber placeholder="Insira o valor a reembolsar" />
          </Form.Item>

          <SubTitle>Data</SubTitle>

          <Form.Item>
            <DatePicker placeholder="Data da despesa" />
          </Form.Item>

          <SubTitle>Descrição da despesa</SubTitle>

          <Form.Item>
            <Input.TextArea placeholder="Qual a natureza de sua solicitação?" />
          </Form.Item>

          <>
            <Form.Item>
              <ButtonContainer>
                <ButtonNo />
                <ButtonYes />
              </ButtonContainer>
            </Form.Item>
          </>
        </NewForm>
      </RefoundPage>
    </Body>
  );
};

export default RefoundRequest;
