import fetch from "node-fetch";
const path = require("path");
const fs = require("fs");
const process = require("process");

const apiCalls = {};

/*
  Retrieve data from Prometheus instance for running pods
*/
apiCalls.fetchPods = async () => {
  try {
    let response = await fetch("http://localhost:31000/api/podList");
    response = await response.json();
    return response;
  } catch {
    console.log("Error occured fetching pods");
  }
};

/*
  Retrieve data from Prometheus instance for running nodes
*/
apiCalls.fetchNodes = async () => {
  try {
    let response = await fetch("http://localhost:31000/api/nodeList");
    response = await response.json();
    return response;
  } catch {
    console.log("Error occured fetching nodes");
  }
};

/*
Generate a valid API key for the user

The API Key will be required to make subsequent
requests to grafana for the user
*/
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

/*
This imports the Kr8s custom dashboard into the user's Grafana

The dashboard needs to be imported to grafana for the iframes
to be available to the user

A valid APIKey is required Grafana to accept the request
*/
const grafanaDashboard = fs.readFileSync(
  path.join(process.cwd(), "/grafana-kr8s-dashboard.json")
);
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
