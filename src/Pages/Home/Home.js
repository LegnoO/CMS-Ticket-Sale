/** @format */

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line, Doughnut } from "react-chartjs-2";
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
  ArcElement,
  ChartDataLabels
);

const Home = () => {
 
  const LineData = {
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

  const DoughnutData = {
    labels: ["Vé chưa sử dụng", "Vé đã sử dụng"],
    datasets: [
      {
        data: [13568, 56024],
        label: " Gói gia đình",
        borderColor: ["#FF8A48", "#4F75FF"],
        backgroundColor: ["#FF8A48", "#4F75FF"],
      },
    ],
  };

  const LineOptions = {
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
      datalabels: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
    title: {
      display: true,
      text: "World population per region (in millions)",
    },
  };

  const DoughnutOptions = {
    plugins: {
      datalabels: {
        padding: 5,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        anchor: "end",
        display: true,
        color: "#000",
        backgroundColor: "#fff",
        formatter: function (value) {
          return Math.round(value);
        },
        boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.25)",
      },
      tooltip: {
        mode: "index",
        intersect: false,
        enabled: true,
      },
      hover: {
        mode: "nearest",
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
    title: {
      display: true,
      text: "Doughnut Chart",
      color: "blue",
    },
  };
  return (
    <>
      <div>
        <Line
          width={"90%"}
          height={"300"}
          data={LineData}
          options={LineOptions}
        />
      </div>
      <div style={{ display: "flex", gap: "15%", justifyContent: "center" }}>
        <div
          style={{
            width: "301px",
            height: "312px",
          }}>
          <h4 style={{ textAlign: "center", marginBottom: " 20px" }}>
            Gói Gia đình
          </h4>
          <Doughnut data={DoughnutData} options={DoughnutOptions} />
        </div>
        <div
          style={{
            width: "301px",
            height: "312px",
          }}>
          <h4 style={{ textAlign: "center", marginBottom: " 20px" }}>
            Gói sự kiện
          </h4>
          <Doughnut data={DoughnutData} options={DoughnutOptions} />
        </div>
      </div>
    </>
  );
};

export default Home;
