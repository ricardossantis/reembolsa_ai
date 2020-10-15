import React, { createRef, useEffect, useState } from "react";
import api from "../../services/api";
import postRequest from "../../components/refund-request/index";
import { useSelector } from "react-redux";
import { openNotification } from "../../components/feedback-msg/";
import { Input, Cascader, DatePicker } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { motion } from "framer-motion";
import { ButtonYes } from "./refund-style";
import {
  RefoundPage,
  Title,
  SubTitle,
  NewForm,
  NewFormItem,
  FormContainer,
  DefaultInputNumber,
} from "./refund-style";

const RefundRequest = () => {
  const formRef = createRef();
  const componentSize = "default";
  const [responseStatus, setResponseStatus] = useState();

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
    if (values.value <= amountLimit && amount.value > 0) {
      postRequest(values, employeeId, employeeName, token, setResponseStatus);
      formRef.current.resetFields();
      openNotification(
        "bottomRight",
        "Sucesso.",
        "Seu reembolso foi enviado para a revisão do seu gestor."
      );
    }
  };
  const checkAmount = (value) => {
    console.log(value);
    if (value <= amountLimit && value !== 0 && value !== null) {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    } else if (value < 1 || value == null) {
      return {
        validateStatus: "error",
        errorMsg: "Valor invalido",
      };
    } else {
      return {
        validateStatus: "error",
        errorMsg: `O seu limite de reembolso é de R$ ${amountLimit}`,
      };
    }
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
              span: 32,
            }}
            wrapperCol={{
              span: 32,
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

            <NewFormItem
              style={{ textAlign: "left" }}
              rules={[
                {
                  required: true,
                  message: "Por favor escolha uma categoria",
                },
              ]}
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
            </NewFormItem>

            <SubTitle>Valor</SubTitle>

            <NewFormItem
              name="value"
              help={amount.errorMsg}
              rules={[
                {
                  required: true,
                  message: "Por favor insira um valor",
                },
              ]}
              validateStatus={amount.validateStatus}
            >
              <DefaultInputNumber
                max={amountLimit}
                value={amount.value}
                onChange={onValueChange}
                placeholder="Insira um valor de reembolso"
              />
            </NewFormItem>

            <SubTitle>Data</SubTitle>

            <NewFormItem
              rules={[
                {
                  required: true,
                  message: "Por favor insira a data do gasto",
                },
              ]}
              name="date"
              value="date"
            >
              <DatePicker
                style={{ width: "100%" }}
                placeholder="Insira a data"
              />
            </NewFormItem>

            <SubTitle>Descrição da despesa</SubTitle>

            <NewFormItem name="description" value="description">
              <Input.TextArea placeholder="Descreva a natureza de seu reembolso" />
            </NewFormItem>

            <>
              <NewFormItem name="confirm" value="confirm">
                <ButtonYes type="primary" htmlType="submit">
                  <CheckCircleFilled />
                </ButtonYes>
              </NewFormItem>
            </>
          </NewForm>
        </RefoundPage>
      </FormContainer>
    </motion.div>
  );
};

export default RefundRequest;
