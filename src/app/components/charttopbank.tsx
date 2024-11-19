"use client"

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);

export default function Chardtopbank() {

let data= [
  {
    label: "Label 1",
    value: 55,
    color: "rgba(0, 43, 73, 1)",
    cutout: "50%",
  },
  {
    label: "Label 2",
    value:15,
    color: "rgba(0, 103, 160, 1)",
    cutout: "50%",
  },
  {
    label: "Label 3",
    value: 80,
    color: "rgba(83, 217, 217, 1)",
    cutout: "50%",
  },
]

  const options: any = {
    plugins: {
   datalabels: {
        formatter: function (value) {
          let val = Math.round(value);
          return new Intl.NumberFormat("tr-TR").format(val); //for number format
        },
        color: "white",
        
        font: {
          weight: 'bold',
          size:14,
          family: 'poppins',
        },
      },
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