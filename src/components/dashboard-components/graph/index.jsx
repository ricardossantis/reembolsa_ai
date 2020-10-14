import React from "react";
import { Pie, defaults } from "react-chartjs-2";
defaults.global.maintainAspectRatio = false;

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
    labels: Object.keys(dataFromList).sort(),
    datasets: [
      {
        data: Object.values(dataFromList),
        backgroundColor: [
          "#2cd3b5",
          "#f9bb1c",
          "#f15555",
          "#4b5b9d",
          "#e79311",
        ],
        hoverBackgroundColor: [
          "#2cd3b5",
          "#f9bb1c",
          "#f15555",
          "#4b5b9d",
          "#e79311",
        ],
      },
    ],
  };

  return (
    <div style={{ height: "100%" }}>
      <Pie data={data} />
    </div>
  );
}

export default Graph;
