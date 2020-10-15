import React from "react";
import { Alert } from "antd";

function Message({ type, list }) {
  let message;
  let dataFromList;
  let alertType;
  console.log(list);

  if (type === "fluxo") {
    let approved = list.filter((item) => item.status === "approved").length;
    let pending = list.filter((item) => item.status === "pending").length;
    let reproved = list.filter((item) => item.status === "reproved").length;
    if ((pending / approved >= 0, 5)) {
      message = "Atenção: Reembolsos precisam ser analisados.";
      alertType = "warning";
    } else if ((reproved / approved >= 0, 75)) {
      message =
        "Urgente: Verificar os documentos fiscais junto aos colaboradores.";
      alertType = "error";
    } else {
      message = "Tudo certo por aqui. Mandou bem!";
      alertType = "success";
    }
  } else if (type === "custo") {
    let date = new Date();
    console.log(list)
    let month = (date.getMonth() + 1).toString();
    if (month.length === 1) {
      month = `0${month}`;
    }
    dataFromList = list
      .filter((item) => item.date.toString().substring(5, 7) === month)
      .filter(item => item.status === "approved")
      .reduce((acc, { category, value }) => {
        acc[category] ? (acc[category] += value) : (acc[category] = value);
        return acc;
      }, {});
      console.log(dataFromList)
    let result = Math.floor(
      Object.values(dataFromList).reduce((acc, current) => acc + current, 0)
    );
    message = `Custo total do mês ${month} é R$${result}`;
  }

  return (
    <div>
      {type === "custo" ? (
        <div style={{ color: "rgba(54, 80, 131, 1)" }}>{message}</div>
      ) : (
        <Alert message={message} type={alertType} />
      )}
    </div>
  );
}

export default Message;
