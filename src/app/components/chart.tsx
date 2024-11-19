"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {

let data= [
  {
    label: "Label 1",
    value: 55,
    color: "#D9D9D9",
    cutout: "50%",
  },
  {
    label: "Label 2",
    value:15,
    color: "#17A9E2",
    cutout: "50%",
  },
]

  const options: any = {
    plugins: {
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  return (
    <div className="w-[180px] h-[180px]">
      <Doughnut data={finalData} options={options} />
    </div>
  );
}

