import React from 'react'

const openNotification = (placement, Context, apiAntd, contextHolder) => {  
  apiAntd.info({
    message: `Notification ${placement}`,
    description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
    placement,
  });
};

export {openNotification}