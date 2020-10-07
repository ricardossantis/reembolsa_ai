import React, { useState, createRef } from "react";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { Form, Input, Cascader, DatePicker } from "antd";
import moment from "moment";
import {
  RefoundPage,
  Title,
  SubTitle,
  ButtonYes,
  ButtonContainer,
  NewForm,
  FormContainer,
} from "./refund-style";

const RefundRequest = () => {
  const formRef = createRef();
  const componentSize = "default";

  const onFormLayoutChange = ({ size }) => {
    formRef.current.setFieldsValue(size);
  };

  const employeeState = useSelector((state) => state.authentication);
  const employeeId = employeeState.user.id;
  const employeeName = employeeState.user.user;
  const token = employeeState.auth;

  const onFinish = (values) => {
    api.post(
      "/refunds",
      {
        ...values,
        status: "pending",
        denied: "",
        userId: employeeId,
        userName: employeeName,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Valores para o reembolso", values);
    formRef.current.resetFields();
  };

  return (
    <FormContainer>
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
              type="number"
              min="0"
              placeholder="Insira um valor de reembolso"
            />
          </Form.Item>

          <SubTitle>Data</SubTitle>

          <Form.Item name="data" value="data">
            {/* <DatePicker placeholder="Insira a data" /> */}
            <Input placeholder="Insira apenas números" type="data" />
          </Form.Item>

          <SubTitle>Descrição da despesa</SubTitle>

          <Form.Item name="description" value="text">
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
    </FormContainer>
  );
};

export default RefundRequest;
