import React from "react";

import LineGraph from "../components/LineGraph.jsx";
import Tile from "../components/Tile.jsx";

import styles from "../assets/css/NodeView.module.css";

export default function NodeView(props) {
  const { node, memoryPressure, diskPressure, pidPressure, ready } =
    props.location.state.info;

  return (
    <div className={styles.containersContainer}>

      <div className={styles.containersContainerHeader}>
        <div className={styles.lineGraph}>
          <LineGraph />
          <h2>CPU</h2>
        </div>

        <div className={styles.lineGraph}>
          <LineGraph />
          <h2>Disk Usage</h2>
        </div>

        <div className={styles.lineGraph}>
          <LineGraph />
          <h2>Memory</h2>
        </div>
      </div>

      <div className={styles.nodeNumbers}>
        <h3 style={{ color: ready === "True" ? "green" : "red" }}>READY</h3>
        <h3>|</h3>
        <h3 style={{ color: diskPressure !== "True" ? "green" : "red" }}>
          Disk Pressure
        </h3>
        <h3>|</h3>
        <h3 style={{ color: memoryPressure !== "True" ? "green" : "red" }}>
          Memory Pressure
        </h3>
        <h3>|</h3>
        <h3 style={{ color: pidPressure !== "True" ? "green" : "red" }}>
          PID Pressure
        </h3>
      </div>
    </div>
  );
}
