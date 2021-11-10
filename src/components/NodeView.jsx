import React from "react";
import styles from "../assets/css/NodeView.module.css";

// NodeView is currently disabled by Kr8s

export default function NodeView(props) {
  const { node, memoryPressure, diskPressure, pidPressure, ready } =
    props.location.state.info;

  return (
    <div className={styles.containersContainer}>
      <div className={styles.containersContainerHeader}>
        <div className={styles.lineGraph}>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=26"
            frameBorder="0"
          ></iframe>
        </div>

        <div className={styles.lineGraph}>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=26"
            frameBorder="0"
          ></iframe>
        </div>

        <div className={styles.lineGraph}>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=26"
            frameBorder="0"
          ></iframe>
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
