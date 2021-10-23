import React from "react";
import styles from "../assets/css/ClusterConnect.module.css";

export default function ClusterConnect(props) {
  let clusters = props.clusters.map((cluster) => {
    return <p className={styles.clusterContainer}>{cluster}</p>;
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
