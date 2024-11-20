"use client";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function Chardtopbank() {
  const data = [
    { label: "BRI", value: 30, color: "#4A3764" },
    { label: "Artha Graha", value: 25, color: "#1FFFE1" },
    { label: "BTN", value: 20, color: "#17A9E2" },
    { label: "Mandiri", value: 15, color: "#146C94" },
    { label: "KEB Hana Bank", value: 10, color: "#6150C1" },
  ];

  const options = {
    plugins: {
      datalabels: {
        formatter: (value: number) => `${value}%`, // Menampilkan persentase
        color: "white",
        font: {
          weight: "bold", // Gunakan tipe yang kompatibel
          size: 14,
          family: "Poppins",
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) =>
            `${tooltipItem.label}: ${tooltipItem.raw}%`, // Tooltip lebih jelas
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Penting untuk responsivitas
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-[450px] h-auto mx-auto">
      <Doughnut data={finalData} />
    </div>
  );
}
