import React from "react";
import { Pie } from "react-chartjs-2";

function Graph({ type, list }) {
  let dataFromList;

  if (type === "fluxo") {
    dataFromList = list.reduce((acc, { status }) => {
      acc[status] ? (acc[status] += 1) : (acc[status] = 1);
      return acc;
    }, {});
  } else if (type === "custo") {
    dataFromList = list.reduce((acc, { category, value }) => {
      acc[category] ? (acc[category] += value) : (acc[category] = value);
      return acc;
    }, {});
  }

  const data = {
    labels: Object.keys(dataFromList),
    datasets: [
      {
        data: Object.values(dataFromList),
        backgroundColor: ["#f9bb1c", "#2cd3b5", "#f15555"],
        hoverBackgroundColor: ["#f9bb1c", "#2cd3b5", "#f15555"],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
}

export default Graph;
