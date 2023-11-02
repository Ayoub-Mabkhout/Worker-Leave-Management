import React from "react";
import { Doughnut } from "react-chartjs-2";
import leaves from "../../data/leaves.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const LeavesChart = ({}) => {
  // Sample data processing. Replace this with your actual data logic.
  const totalLeaves = 30; // Assume a total of 30 leaves are allowed in a year.
  const usedLeaves = leaves.filter((leave) => leave.status === "approved")
    .length;
  const pendingLeaves = leaves.filter((leave) => leave.status === "pending")
    .length;
  const remainingLeaves = totalLeaves - (usedLeaves + pendingLeaves);

  const data = {
    labels: ["Used", "Pending", "Remaining"],
    datasets: [
      {
        data: [usedLeaves, pendingLeaves, remainingLeaves],
        backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"]
      }
    ]
  };

  return (
    <div style={{ position: "relative", margin: "auto" }}>
      <div
        style={{
          position: "relative",
          margin: "auto",
          width: "calc(min(45vw, 45vh))",
          height: "calc(min(45vw, 45vh))"
        }}
      >
        <Doughnut data={data} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, 20%)",
          fontSize: "1.25rem",
          fontWeight: "bold"
        }}
      >
        Leaves
      </div>
    </div>
  );
};

export default LeavesChart;
