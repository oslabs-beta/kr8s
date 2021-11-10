import React, { useState } from "react";

import Banner from "../components/Banner.jsx";
import List from "../components/List.jsx";

import style from "../assets/css/Nodes.module.css";

export default function Nodes(props) {
  const [myNode, setMyNode] = useState({});

  /*
    ****    Currently rerouting to NodeView is disabled     ****
    **** To enable update reroute prop value passed to List component to '/NodeView' ****
    This function is passed down to the list component

    It is invoked onClick and is used to set the specific pod to display for a user
    when they are rerouted to the NodeView component, which displays information on
    a single Pod    
  */
  function setCurrentNode(nodeName) {
    for (let i = 0; i < nodesValues.length; i++) {
      if (nodesValues[i].node === nodeName) {
        setMyNode(nodesValues[i]);
        return;
      }
    }
  }

  /*
    Parse through passed in Nodes data from props
    This will organize the information to be displayed in the components below
  */
  const nodesValues = [],
    nodesHeaders = [
      { id: "node", label: "Node", minWidth: 100, align: "center" },
      { id: "ready", label: "Ready", minWidth: 100, align: "center"  },
      { id: "memorypressure", label: "Memory Pressure", minWidth: 100, align: "center"  },
      { id: "diskpressure", label: "Disk Pressure", minWidth: 100, align: "center"  },
      { id: "pidPressure", label: "PID Pressure", minWidth: 100, align: "center"  },
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
    nodeValues["memorypressure"] = node.status.conditions[0].status;
    nodeValues["diskpressure"] = node.status.conditions[1].status;
    nodeValues["pidPressure"] = node.status.conditions[2].status;
    nodeValues["ready"] = node.status.conditions[3].status;

    nodesValues.push(nodeValues);
  });

  
  return (
    <div id={style.nodesContainer}>
      <Banner
        items={[
          { header: "TOTAL", value: numNodes },
          { header: "AVAILABLE", value: numAvailableNodes },
        ]}
      />

      <div id={style.lineGraphs}>
          <iframe
            className={style.lineGraph}
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=52"
            frameBorder="1"
          ></iframe>
          <iframe
            className={style.lineGraph}
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=54"
            frameBorder="1"
          ></iframe>
          <iframe
            className={style.lineGraph}
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=56"
            frameBorder="1"
          ></iframe>
      </div>

      <List
        listValueHeaders={nodesHeaders}
        listValue={nodesValues}
        setCurrentTarget={setCurrentNode}
        info={myNode}
        reroute={false}
      />


    </div>
  );
}
