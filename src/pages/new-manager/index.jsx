import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "antd";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";
import { motion } from "framer-motion";
import {
  Titulo,
  Container,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledInputPassword,
  ContainerButtons,
  Box,
} from "../../components/new-manager";
import {
  ButtonContainer,
  ZButton,
} from "../../components/system-general/system-button/ant-button/ant-button-style.js";
import { openNotification } from '../../components/feedback-msg/'
import api from "../../services/api";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CadastroGerente = () => {
  const history = useHistory();
  const [manager, setManager] = useState({
    email: "",
    password: "",
    company: "",
    accessLevel: 1,
  });
  const [responseStatus, setResponseStatus] = useState();

  const handleSubmit = () => {
    api
      .post(`/register`, { ...manager })
      .then((res) => {
        if (res.status === 201) {
          setResponseStatus(res.status)
          setTimeout(() => {history.push('/login')}, 3000)
        }
      })
      .catch((error) => {
        console.log(error);
        setResponseStatus(error.response.status)

        if (error.response.status === 400) {
          setTimeout(() => {history.push('/login')}, 5000)
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo.data);
  };

  const [form] = Form.useForm();
  const onFinish = () => {
    handleSubmit();
    form.resetFields();
    
  };

  useEffect(() => {
    if (responseStatus === 201) {
      openNotification('bottomRight', 'Nova empresa cadastrada.', 'Você será redirecionado para o login.')
    } else if (responseStatus === 400) {
      openNotification('bottomRight', 'Não foi possivel cadastrar!', 'Você será redirecionado para o login.')
    }
  }, [(values) => onFinish(values)])  

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
      <Container>
        <Titulo>Cadastro</Titulo>
        <Box>
        <StyledForm
          {...layout}
          form={form}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <StyledLabel style={{ fontSize: 18 }}>Empresa</StyledLabel>
          <Form.Item
            name="company"
            rules={[
              {
                required: true,
                message: "Digite o nome da sua empresa",
              },
            ]}
          >
            <StyledInput
              onChange={({ target: { value } }) =>
                setManager({ ...manager, company: value })
              }
              value={manager.company}
            />
          </Form.Item>
          <StyledLabel style={{ fontSize: 18 }}>E-mail</StyledLabel>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Digite um e-mail válido",
              },
            ]}
          >
            <StyledInput
              onChange={({ target: { value } }) =>
                setManager({ ...manager, email: value })
              }
              value={manager.email}
            />
          </Form.Item>

          <StyledLabel style={{ fontSize: 18 }}>Senha</StyledLabel>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Digite uma senha",
              },
            ]}
          >
            <StyledInputPassword
              onChange={({ target: { value } }) =>
                setManager({ ...manager, password: value })
              }
              value={manager.password}
            />
          </Form.Item>

          <StyledLabel style={{ fontSize: 18 }}>Confirme sua senha</StyledLabel>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Confirme sua senha",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "Senha e confirmar senha devem ser iguais"
                  );
                },
              }),
            ]}
          >
            <StyledInputPassword
              onChange={({ target: { value } }) =>
                setManager({ ...manager, confirmPassword: value })
              }
              value={manager.confirmPassword}
            />
          </Form.Item>
          <ContainerButtons>
            <ButtonContainer>
              <Form.Item {...tailLayout}>
                <ZButton
                  onClick={() => history.push("/")}
                  shape="circle"
                  icon={
                    <CloseCircleFilled
                      style={{ color: "#F15454", fontSize: 50 }}
                    />
                  }
                />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <ZButton
                  htmlType="submit"
                  shape="circle"
                  icon={
                    <CheckCircleFilled
                      style={{ color: "#2CD3B5", fontSize: 50 }}
                    />
                  }
                />
              </Form.Item>
            </ButtonContainer>
          </ContainerButtons>
        </StyledForm>
        </Box>
      </Container>
    </motion.div>
  );
};
export default CadastroGerente;
