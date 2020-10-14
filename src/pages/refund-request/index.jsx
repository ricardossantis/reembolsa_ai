import React, { createRef, useEffect, useState } from "react";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { Input, Cascader, DatePicker, InputNumber } from "antd";
import { motion } from "framer-motion";
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
  const [amountLimit, setAmountLimit] = useState(
    employeeState.user.amountLimit
  );
  const token = employeeState.auth;
  let finishMessage = "";

  useEffect(() => {
    api
      .get("/refunds", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const value = res.data
          .filter(
            (item) => item.userId === employeeId && item.status !== "reproved"
          )
          .map((item) => ({ refoundApproved: parseInt(item.value) }))
          .reduce((x, y) => x + y.refoundApproved, 0);
        setAmountLimit(amountLimit - value);
      })
      .catch((err) => console.log(err));
  }, []);
  const onFinish = (values) => {
    if (values.value <= amountLimit) {
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
        errorMsg: "Insira um valor para reembolso",
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
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

            <NewForm.Item name="date" value="date">
              <DatePicker placeholder="Insira a data" />
            </NewForm.Item>

            <SubTitle>Descrição da despesa</SubTitle>

            <NewForm.Item name="description" value="description">
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
    </motion.div>
  );
};

export default RefundRequest;
