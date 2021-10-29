import React from "react";

import Speedometer from "../components/Speedometer.jsx";
import Tile from "../components/Tile.jsx";
import List from "../components/List.jsx";
import LineGraph from "../components/LineGraph.jsx";
import Header from "../components/Header.jsx";

import styles from "../assets/css/Pods.module.css";

// DUMMY DATA
const podsHeaders = [{ id: "pods", label: "Pods", minWidth: 100 }];
const podsValues = [];
for (let i = 0; i < 20; i++) {
  podsValues.push({ id: i, pods: `pod${i}` });
}
const listValueHeaders = podsHeaders;
const listValue = podsValues;

export default function Pods(props) {
  const headerContent = `${props.clusterName} Pod Condition`;

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
        <List
          listValueHeaders={listValueHeaders}
          listValue={listValue}
          reroute="/podview"
        />
      </div>

      <div className={styles.podsContainerHeader}>
        {/* TODO: Add grafana link for each speedometer */}
        {/* <LineGraph src={props.grafana.cpu} />
        <LineGraph src={props.grafana.memory} />
        <Speedometer src={props.grafana.restarts} /> */}
        {/* using dashboard 6663 */}
        <iframe
          src="http://localhost:32000/d-solo/AAOMjeHmk/kubernetes-pod-and-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1635437894472&to=1635441494472&theme=dark&panelId=3"
          width="450"
          height="200"
          frameborder="0"
        ></iframe>
        <iframe
          src="http://localhost:32000/d-solo/AAOMjeHmk/kubernetes-pod-and-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1635437907441&to=1635441507441&theme=dark&panelId=2"
          width="450"
          height="200"
          frameborder="0"
        ></iframe>
        <iframe
          src="http://localhost:32000/d-solo/AAOMjeHmk/kubernetes-pod-and-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1635437052196&to=1635440652196&theme=dark&panelId=8"
          width="450"
          height="200"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
