import React from "react";
import { Link } from "react-router-dom";
import apiCalls from "../APIcalls.js";

import styles from "../assets/css/ClusterConnect.module.css";
import logo from "../assets/css/imgs/Transparent_Image_3.png";

const path = require("path");
const fs = require("fs");

export default function ClusterConnect(props) {
  let clusters = props.clusters.map((cluster) => {
    return (
      <Link
        key={cluster}
        to="/dash"
        onClick={() => {
          props.getClusterInfo();
          apiCalls.grafanaDashboardPostRequest();
        }}
      >
        <p className={styles.clusterContainer}>{cluster}</p>
      </Link>
    );
  });

  return (
    <div>
      <main className={styles.mainContainer}>
        <img height="225px" width="225px" src={logo}></img>
        <section id={styles.clusters}>{clusters}</section>
        <section id={styles.newContainer}>Connect To New Cluster</section>
      </main>
    </div>
  );
}
