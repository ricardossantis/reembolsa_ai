import React from "react";
import { Alert } from "antd";
import { message } from "antd";
import styled from "styled-components";
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const Succeed = (content) => {
  message.success({
    content: "Pronto! Novo usuário criado e pronto para fazer reembolsos.",
    className: "custom-class",
    style: {
      marginTop: "20vh",
    },
  });
};

const ThrowError = (content) => {
  message.error({
    content: "Erro! O usuário cadastrado já existe!",
    className: "custom-class",
    style: {
      marginTop: "20vh",
    },
  });
};

const SuccessMsg = (props) => {
  return (
    
      <Alert
      message={props.message}
      description={props.description}
      type="success"
      showIcon
    />
    
  );
};

const ErrorMsg = (props) => {
  return (
    <Alert
      message={props.message}
      description={props.description}
      type="error"
      showIcon
    />
  );
};

const openNotification = (placement, message, description) => {
  notification.info({
    message: message,
    description: description,
    placement,
  });
};



export { SuccessMsg, ErrorMsg, Succeed, ThrowError, openNotification };