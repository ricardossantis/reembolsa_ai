import React from 'react'
import { Button, notification, Divider, Space } from 'antd';

const openNotification = (placement, Context, apiAntd, contextHolder) => {  
  apiAntd.info({
    message: `Notification ${placement}`,
    description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
    placement,
  });
};

export {openNotification}