import React from "react";

import Speedometer from '../components/Speedometer.jsx';
import Tile from '../components/Tile.jsx';
import List from '../components/List.jsx';
import Header from '../components/Header.jsx';

import style from '../assets/css/Nodes.module.css';

// DUMMY DATA
const nodeHeaders = [{ id: "nodes", label: "Nodes", minWidth: 100 }];
const nodeValues = [];
for (let i = 0; i < 20; i++) {
  nodeValues.push({ id: i, nodes: `node${i}` });
}
const listValueHeaders = nodeHeaders;
const listValue = nodeValues;

export default function Nodes(props) {
  
  const headerContent = `${props.clusterName} Node Condition`
  
  return (
    <div className={style.nodesContainer}>
      <div className={style.nodesContainerHeader}>
        {/* TODO: Add tileValue references */}
        <Tile tileHeader="Number of Nodes" tileValue="5"/>
        <Tile tileHeader="Available Nodes" tileValue="4"/>
        <Header headerContent={headerContent} />
      </div>

      <div className={style.nodesContainerMainContent}>
        {/* TODO: Add grafana link for each speedometer */}
        <div className={style.nodesContainerSpeedometerColumn}>
          <Speedometer src="TODO: Grafana Link Nodes CPU"/>
          <Speedometer src="TODO: Grafana Link Nodes Memory"/>
          <Speedometer src="TODO: Grafana Link Nodes Disk Space"/>
        </div>

        <div className={style.nodesContainerList}>
          <h3>Node Condition</h3>
          {/* TODO: Add list props once List component is done */}
          <List
          listValueHeaders={listValueHeaders}
          listValue={listValue}
          reroute="/nodeview"
          />
        </div>
      </div>
    </div>
  );
}
