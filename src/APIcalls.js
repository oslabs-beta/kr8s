import fetch from "node-fetch";
const path = require("path");
const fs = require("fs");

const grafanaDashboard = fs.readFileSync(
  path.join(
    __dirname,
    "../../../../../../../../grafana-kr8s-dashboard-copy.json"
  )
);
const apiCalls = {};

apiCalls.fetchPods = async () => {
  try {
    let response = await fetch("http://localhost:31000/api/podList");
    response = await response.json();
    return response;
  } catch {
    console.log("Error occured fetching pods");
  }
};

apiCalls.fetchNodes = async () => {
  try {
    let response = await fetch("http://localhost:31000/api/nodeList");
    response = await response.json();
    return response;
  } catch {
    console.log("Error occured fetching nodes");
  }
};

apiCalls.grafanaDashboardPostRequest = async () => {
  try {
    let response = await fetch("http://localhost:32000/api/dashboards/db", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJrIjoicUNGMDRmRGwxZHVqejZoU2tId0pRR0YzUEhZNG9FaVYiLCJuIjoiYWRtaW4iLCJpZCI6MX0=",
      },
      body: grafanaDashboard,
    });
    console.log(response);
  } catch {
    console.log("Error occured posting dashboard to grafana");
  }
};

export default apiCalls;
