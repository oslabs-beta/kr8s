import React from "react";

import Tile from "../components/Tile.jsx";
import List from "../components/List.jsx";
import Header from "../components/Header.jsx";

import styles from "../assets/css/PodView.module.css";

const containersHeaders = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "ready", label: "Ready", minWidth: 100 },
  { id: "restarts", label: "Number of Restarts", minWidth: 100 },
];

export default function PodView(props) {
  const { pod, initialized, ready, containersReady, podScheduled, numContainers, containers } = props.pod;
  const containersValues = [];
  
  const headerContent = `Pod: ${pod}`;
  
  for(let i = 0; i < containers.length; i++) {
    const container = {};
    container['name'] = containers[i].name;
    container['ready'] = containers[i].ready.toString();
    container['restarts'] = containers[i].restartCount;

    containersValues.push(container);
  }


  return (
    <div className={styles.containersContainer}>
      <Header headerContent={headerContent} />
      
      
      <div className={styles.containersContainerHeader}>
        {/* TODO: Add tileValue references */}
        <Tile tileHeader="Number of Running Containers" tileValue={numContainers} />
        <Tile tileHeader="Number of Failed Containers" tileValue="1" />
        <Tile tileHeader="Number of Unknown Containers" tileValue="0" />
      </div>

      <div className={styles.containersContainerList}>
        <List
          listValueHeaders={containersHeaders}
          listValue={containersValues}
          reroute={false}
        />
      </div>

      <div className={styles.containersContainerHeader}>
        {/* TODO: Add tileValue references */}
        <Tile tileHeader="CPU Cores Requested by Containers" tileValue="1.45" />
        <Tile tileHeader="Memory Requested by Containers" tileValue="940MB" />
      </div>
    </div>
  );
}
