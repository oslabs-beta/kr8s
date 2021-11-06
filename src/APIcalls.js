import fetch from "node-fetch";
const path = require("path");
const fs = require("fs");

const grafanaDashboard = fs.readFileSync(
  path.join(__dirname, "../../../../../../grafana-kr8s-dashboard.json")
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

apiCalls.createAPIkey = async () => {
  try {
    let respObj;
    let response = await fetch("http://localhost:32000/api/auth/keys", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "newuser",
        role: "Admin",
        secondsToLive: 86400,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        respObj = data;
      });
    return respObj.key;
  } catch {
    console.log("Error occured creating API key");
  }
};

apiCalls.grafanaDashboardPostRequest = async (APIKey) => {
  try {
    let response = await fetch("http://localhost:32000/api/dashboards/db", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${APIKey}`,
      },
      body: grafanaDashboard,
    });
  } catch {
    console.log("Error occured posting dashboard to grafana");
  }
};

export default apiCalls;
