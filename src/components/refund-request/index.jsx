import React, { createRef, useState } from "react";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { Input, Cascader, DatePicker, InputNumber } from "antd";
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
  const [amount, setAmount] = useState({
    value: 0,
  });
  const employeeState = useSelector((state) => state.authentication);
  const employeeId = employeeState.user.userId;
  const employeeName = employeeState.user.user;
  const amountLimit = employeeState.user.amountLimit;
  let finishMessage = "";
  const token = employeeState.auth;
  const onFinish = (values) => {
    if (values.value >= amountLimit) {
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
      formRef.current.resetFields();
      finishMessage = "Dados enviados com sucesso";
    }
  };
  const checkAmount = (value) => {
    if (value <= amountLimit) {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
    if (value < 0) {
      return {
        validateStatus: "error",
        errorMsg: "Insira um para reembolso",
      };
    }
    return {
      validateStatus: "error",
      errorMsg: `O seu limite de reembolso é de R$ ${amountLimit}`,
    };
  };

  const onValueChange = (value) => {
    setAmount({ ...checkAmount(value), value });
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

          <NewForm.Item
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
          </NewForm.Item>

          <SubTitle>Valor</SubTitle>

          <NewForm.Item
            name="value"
            help={amount.errorMsg || ""}
            rules={[
              {
                required: true,
                message: "Por favor insira um valor",
              },
            ]}
            validateStatus={amount.validateStatus}
          >
            <InputNumber
              max={amountLimit}
              min={0}
              value={amount.value}
              onChange={onValueChange}
              placeholder="Insira um valor de reembolso"
            />
          </NewForm.Item>

          <SubTitle>Data</SubTitle>

          <NewForm.Item name="data" value="data">
            <DatePicker placeholder="Insira a data" />
          </NewForm.Item>

          <SubTitle>Descrição da despesa</SubTitle>

          <NewForm.Item name="text" value="text">
            <Input.TextArea placeholder="Descreva a natureza de seu reembolso" />
          </NewForm.Item>

          <>
            <NewForm.Item name="confirm" value="confirm">
              <ButtonContainer>
                <ButtonYes type="primary" htmlType="submit" />
              </ButtonContainer>
            </NewForm.Item>
          </>
        </NewForm>
      </RefoundPage>
      {finishMessage !== undefined && <p>{finishMessage}</p>}
    </FormContainer>
  );
};

export default RefundRequest;
