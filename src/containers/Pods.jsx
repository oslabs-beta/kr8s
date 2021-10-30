import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Speedometer from "../components/Speedometer.jsx";
import Tile from "../components/Tile.jsx";
import List from "../components/List.jsx";
// import LineGraph from "../components/LineGraph.jsx";
import Header from "../components/Header.jsx";

import styles from "../assets/css/Pods.module.css";
import PodView from "../components/PodView.jsx";

export default function Pods(props) {
  const headerContent = `${props.clusterName} Pod Condition`;
  
  let runningPods = 0, 
      pendingPods = 0,
      failedPods = 0,
      unknownPods = 0,
      succeededPods = 0;

  props.pods.forEach(pod => {
    switch(pod.status.phase) {
      case "Running":
        runningPods++;
        break;
      case "Pending":
        pendingPods++;
        break;
      case "Failed":
        failedPods++;
        break;
      case "Unknown":
        unknownPods++;
        break;
      case "Succeeded":
        succeededPods++;
        break;
    }
  })    

  return (
    <Router>
      <Switch>
        <Route path='/pods'>
          <div className={styles.podsContainer}>
            <Header headerContent={headerContent} />
            <div className={styles.podsContainerHeader}>
              {/* TODO: Add tileValue references */}
              <Tile tileHeader="Running Pods" tileValue={runningPods} />
              <Tile tileHeader="Pending Pods" tileValue={pendingPods} />
              <Tile tileHeader="Failed Pods" tileValue={failedPods} />
              <Tile tileHeader="Unknown Pods" tileValue={unknownPods} />
              <Tile tileHeader="Succeeded Pods" tileValue={succeededPods} />
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
        </Route>

        <Route path="/podview">
          <PodView 

          />
        </Route>
      </Switch>
    </Router>
  );
}
