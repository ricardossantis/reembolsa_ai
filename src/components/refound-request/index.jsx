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

          <Form.Item>
            <InputNumber placeholder="Insira um valor de reembolso" />
          </Form.Item>

          <SubTitle>Data</SubTitle>

          <Form.Item>
            <DatePicker placeholder="Insira a data" />
          </Form.Item>

          <SubTitle>Descrição da despesa</SubTitle>

          <Form.Item>
            <Input.TextArea placeholder="Descreva a natureza de seu reembolso" />
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
