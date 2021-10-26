import React from "react";

import Tile from "../components/Tile.jsx";
import List from "../components/List.jsx";
import Header from "../components/Header.jsx";

import styles from "../assets/css/PodView.module.css";

// DUMMY DATA
const containersHeaders = [
  { id: "containers", label: "Containers", minWidth: 100 },
  { id: "health", label: "Health", minWidth: 100 },
  { id: "restarts", label: "Number of Restarts", minWidth: 100 },
];
const containersValues = [];
for (let i = 0; i < 3; i++) {
  containersValues.push({
    id: i,
    containers: `container${i}`,
    health: "good",
    restarts: 0,
  });
}
const listValueHeaders = containersHeaders;
const listValue = containersValues;

export default function PodView(props) {
  const headerContent = `Cluster ${props.clusterName} - ${props.location.rowName}`;

  return (
    <div className={styles.containersContainer}>
      <Header headerContent={headerContent} />
      <div className={styles.containersContainerHeader}>
        {/* TODO: Add tileValue references */}
        <Tile tileHeader="Number of Running Containers" tileValue="3" />
        <Tile tileHeader="Number of Failed Containers" tileValue="1" />
        <Tile tileHeader="Number of Unknown Containers" tileValue="0" />
      </div>

      <div className={styles.containersContainerList}>
        {/* TODO: Add listValue references */}
        <List
          listValueHeaders={listValueHeaders}
          listValue={listValue}
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
