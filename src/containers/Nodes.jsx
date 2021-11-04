import React, { useState } from "react";

import Banner from "../components/Banner.jsx";
import Tile from "../components/Tile.jsx";
import List from "../components/List.jsx";
import Header from "../components/Header.jsx";

import style from "../assets/css/Nodes.module.css";

export default function Nodes(props) {
  const headerContent = `${props.clusterName} Node Condition`;
  const [myNode, setMyNode] = useState({});

  function setCurrentNode(nodeName) {
    for (let i = 0; i < nodesValues.length; i++) {
      if (nodesValues[i].node === nodeName) {
        setMyNode(nodesValues[i]);
        return;
      }
    }
  }

  const nodesValues = [],
    nodesHeaders = [
      { id: "node", label: "Node", minWidth: 100 },
      { id: "ready", label: "Ready", minWidth: 100 },
      { id: "memorypressure", label: "MemoryPressure", minWidth: 100 },
      { id: "diskpressure", label: "DiskPressure", minWidth: 100 },
      { id: "pidPressure", label: "PID Pressure", minWidth: 100 },
    ];

  let numNodes = props.nodes.length,
    numAvailableNodes = 0;

  props.nodes.forEach((node) => {
    // Increment Ready count for nodes
    for (let i = 0; i < node.status.conditions.length; i++) {
      const { type, status } = node.status.conditions[i];
      if (type === "Ready" && status === "True") ++numAvailableNodes;
    }

    // Build and push current nodeValues object and push to nodesValues array
    const nodeValues = {};
    nodeValues["node"] = node.metadata.name;
    nodeValues["memoryPressure"] = node.status.conditions[0].status;
    nodeValues["diskPressure"] = node.status.conditions[1].status;
    nodeValues["pidPressure"] = node.status.conditions[2].status;
    nodeValues["ready"] = node.status.conditions[3].status;

    nodesValues.push(nodeValues);
  });

  return (
    <div className={style.nodesContainer}>
      <div className={style.nodesContainerHeader}>
        <Banner
          width='250'
          items={[
            {header: "TOTAL", value: numNodes},
            {header: "AVAILABLE", value: numAvailableNodes}
          ]}
        />
        {/* TODO: Add tileValue references */}
        {/* <Tile tileHeader="Number of Nodes" tileValue={numNodes} />
        <Tile tileHeader="Healthy Nodes" tileValue={numAvailableNodes} /> */}
        <Header headerContent={headerContent} />
      </div>

      <div className={style.nodesContainerMainContent}>
        {/* TODO: Add grafana link for each speedometer */}
        <div className={style.nodesContainerSpeedometerColumn}>
          <p>
            <iframe
              src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=26"
              width="280"
              height="180"
              frameborder="0"
            ></iframe>
          </p>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=28"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=30"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
        </div>

        <div className={style.nodesContainerList}>
          <h3>Node Condition</h3>
          {/* TODO: Add list props once List component is done */}
          <List
            listValueHeaders={nodesHeaders}
            listValue={nodesValues}
            setCurrentTarget={setCurrentNode}
            info={myNode}
            reroute="/nodeview"
          />
        </div>
      </div>
    </div>
  );
}
