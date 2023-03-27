/** @format */

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  Filler,
  Legend,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement
);

const Home = () => {
  const data = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
    datasets: [
      {
        data: [140, 160, 170, 180, 200, 145, 260],
        label: " Doanh thu",
        fill: true,
        borderColor: "rgba(255,153,60,1)",
        borderWidth: 4,
        pointRadius: 0,
        lineTension: 0.4,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          const gradient = ctx.createLinearGradient(0, 120, 0, 350);
          gradient.addColorStop(0, "rgba(255, 153, 60, 0.2)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    layout: {
      padding: 20,
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 140,
        max: 260,
        grid: {
          borderColor: "green",
          borderWidth: 0,
          drawBorder: false,
          drawOnChartArea: true,
          display: true,
          drawTicks: false,
        },
        beginAtZero: false,
        ticks: {
          display: true,
          padding: 20,

          callback: function (value) {
            return value + "tr";
          },
        },
      },
    },
    elements: {},
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {},
    },
    title: {
      display: true,
      text: "World population per region (in millions)",
    },
  };

  return (
    <div>
      <Line width={"90%"} height={"300"} data={data} options={options} />
    </div>
  );
};

export default Home;
