import React from 'react';
import { Alert } from 'antd';
import { message, Button } from 'antd';

const Succeed = () => {
  message.success({
    content: 'This is a prompt message with custom className and style',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  });
};

const SuccessMsg = (props) => {
    return <Alert
        message={props.message}
      description={props.description}
      type="success"
      showIcon
    />
}

const ErrorMsg = (props) => {
    return <Alert
      message={props.message}
      description={props.description}
      type="error"
      showIcon
    />    
}

export {SuccessMsg, ErrorMsg, Succeed}
  