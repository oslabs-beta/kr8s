import React from "react";
import { Link } from "react-router-dom";

import styles from "../assets/css/ClusterConnect.module.css";

export default function ClusterConnect(props) {
  let clusters = props.clusters.map((cluster) => {
    return (
      <Link key={cluster} to="/dash" onClick={props.getClusterInfo}>
        <p className={styles.clusterContainer}>{cluster}</p>
      </Link>
    );
  });

  return (
    <div>
      <main className={styles.mainContainer}>
        <section>{clusters}</section>
        <section className={styles.clusterContainer}>
          Connect To New Cluster
        </section>
      </main>
    </div>
  );
}
