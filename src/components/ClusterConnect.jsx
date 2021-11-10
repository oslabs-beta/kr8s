import React from "react";
import { Link } from "react-router-dom";
import apiCalls from "../APIcalls.js";

import styles from "../assets/css/ClusterConnect.module.css";
import logo from "../assets/css/imgs/kr8s-connect.svg";

export default function ClusterConnect(props) {
  let clusters = props.clusters.map((cluster) => {
    return (
      <Link
        className={styles.clusterLink}
        key={cluster}
        to="/dash"
        onClick={async () => {
          props.getClusterInfo();
          const APIkey = await apiCalls.createAPIkey();
          await apiCalls.grafanaDashboardPostRequest(APIkey);
        }}
      >
        <p className={styles.clusterContainer}>{cluster}</p>
      </Link>
    );
  });

  return (
    <div>
      <main className={styles.mainContainer}>
        <img id={styles.logo} height="150px" width="150px" src={logo}></img>
        <section id={styles.clusters}>{clusters}</section>
        <section id={styles.newContainer}>Connect To New Cluster</section>
      </main>
    </div>
  );
}
