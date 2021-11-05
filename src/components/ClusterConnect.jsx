import React from "react";
import { Link } from "react-router-dom";

// const express = require("express");
// const cors = require("cors");
// app = express();
// app.use(cors());

import styles from "../assets/css/ClusterConnect.module.css";
import logo from "../assets/css/imgs/Transparent_Image_3.png";
import underConstruction from "../assets/css/imgs/under-construction.png";

const path = require("path");
const fs = require("fs");

export default function ClusterConnect(props) {
  const grafanaDashboard = fs.readFileSync(
    path.join(__dirname, "../../../../../../../../grafana-kr8s-dashboard.json")
  );
  console.log("grafanaDashboard", grafanaDashboard);
  console.log("dirname", __dirname);

  function grafanaDashboardPostRequest() {
    fetch("http://localhost:32000/api/dashboards/db", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJrIjoidTFIWjk3aHRLZDV6TkdONTdjS0xVVzZiZU9wMEc5V3UiLCJuIjoiYWRtaW4iLCJpZCI6MX0=",
      },
      body: { dashboard: grafanaDashboard },
    });
  }

  let clusters = props.clusters.map((cluster) => {
    return (
      <Link
        key={cluster}
        to="/dash"
        onClick={() => {
          props.getClusterInfo();
          grafanaDashboardPostRequest();
        }}
      >
        <p className={styles.clusterContainer}>{cluster}</p>
      </Link>
    );
  });

  return (
    <div>
      <main className={styles.mainContainer}>
        <img height="150px" width="150px" src={logo}></img>
        <section>{clusters}</section>
        <section
          className={styles.clusterContainer}
          style={{ backgroundImage: `url(${underConstruction})` }}
        >
          Connect To New Cluster
        </section>
      </main>
    </div>
  );
}
