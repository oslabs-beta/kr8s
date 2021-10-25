import React from "react";

import Speedometer from "../components/Speedometer.jsx";
import Tile from "../components/Tile.jsx";
import LineGraph from "../components/LineGraph.jsx";
import List from "../components/List.jsx";
import Header from "../components/Header.jsx";

import styles from "../assets/css/Pods.module.css";

// DUMMY DATA
const podsHeaders = [{ id: "pods", label: "Pods", minWidth: 100 }];
const podsValues = [];
for (let i = 0; i < 20; i++) {
  podsValues.push({ pods: `pod${i}` });
}
const listValueHeaders = podsHeaders;
const listValue = podsValues;

export default function Pods(props) {
  const headerContent = `Cluster ${props.clusterName} - Pods`;

  return (
    <div className={styles.podsContainer}>
      <Header headerContent={headerContent} />
      <div className={styles.podsContainerHeader}>
        {/* TODO: Add tileValue references */}
        <Tile tileHeader="Number of Running Pods" tileValue="20" />
        <Tile tileHeader="Number of Pending Pods" tileValue="0" />
        <Tile tileHeader="Number of Failed Pods" tileValue="3" />
        <Tile tileHeader="Number of Unknown Pods" tileValue="0" />
      </div>

      <div className={styles.podsContainerList}>
        {/* TODO: Add listValue references */}
        <List listValueHeaders={listValueHeaders} listValue={listValue} />
      </div>

      <div className={styles.podsContainerHeader}>
        {/* TODO: Add grafana link for each speedometer */}
        <Speedometer src="TODO: Grafana Link Pods CPU" />
        <Speedometer src="TODO: Grafana Link Pods Memory" />
        <Speedometer src="TODO: Grafana Link Pods Restarts" />
      </div>
    </div>
  );
}
