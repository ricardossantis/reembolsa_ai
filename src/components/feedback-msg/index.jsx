import React from 'react';
import { Alert } from 'antd';

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

export {SuccessMsg, ErrorMsg}
  