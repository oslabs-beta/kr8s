import React from "react";

import Tile from "../components/Tile.jsx";
import List from "../components/List.jsx";
import Banner from "../components/Banner.jsx";

import styles from "../assets/css/PodView.module.css";

const containersHeaders = [
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  { id: "ready", label: "Ready", minWidth: 100, align: "center" },
  { id: "restarts", label: "Number of Restarts", minWidth: 100, align: "center" },
];

export default function PodView(props) {
  const {
    pod,
    initialized,
    ready,
    containersReady,
    podScheduled,
    numContainers,
    containers,
  } = props.location.state.info;
  const containersValues = [];
  let runningContainers = 0;
  let failedContainers = 0;

  for (let i = 0; i < containers.length; i++) {
    const container = {};
    container["name"] = containers[i].name;
    container["ready"] = containers[i].ready.toString();
    container["restarts"] = containers[i].restartCount;

    if(containers[i].state.running) runningContainers++;
    else failedContainers++;

    containersValues.push(container);
  }

  return (
    <div className={styles.containersContainer}>

      <div className={styles.containersContainerHeader}>
        
        <Banner 
          items={[
            {header: 'TOTAL CONTAINERS' ,value: numContainers},
            {header: 'RUNNING CONTAINERS' ,value: runningContainers},
            {header: 'FAILED CONTAINERS' ,value: failedContainers}
            ]}
        />

      </div>

      <div className={styles.containersContainerList}>
        <List
          listValueHeaders={containersHeaders}
          listValue={containersValues}
          reroute={false}
        />
      </div>
    </div>
  );
}
