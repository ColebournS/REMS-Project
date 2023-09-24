import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chart, setChart] = useState({});

  var baseUrl =
    "https://emoncms.org/feed/data.json?id=486007&start=1695578400&end=1695578560&interval=10&average=0&timeformat=unix&skipmissing=0&limitinterval=0&delta=0";

  useEffect(() => {
    const fetchEnergyUsage = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log("Responce Data:" + json);
              setChart(json.data);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchEnergyUsage();
  }, [baseUrl]);




  console.log("chart", chart);
  var data = {
    labels: chart?.energy?.map((x) => x.name),
    datasets: [
      {
        label: `${chart?.energy?.length} ///Change This Label Name///`,
        data: chart?.energy?.map((x) => x.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Line data={data} height={400} options={options} />
    </div>
  );
};

export default LineChart;
