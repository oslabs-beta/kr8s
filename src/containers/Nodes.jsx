import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Speedometer from '../components/Speedometer.jsx';
import Tile from '../components/Tile.jsx';
import List from '../components/List.jsx';
import Header from '../components/Header.jsx';

import style from '../assets/css/Nodes.module.css';
import NodeView from "../components/NodeView.jsx";

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
  
  let numNodes = props.nodes.length,
      numAvailableNodes = 0;
  
  props.nodes.forEach(node => {
    for(let i = 0; i < node.status.conditions.length; i++) {
      const {type, status} = node.status.conditions[i];
      if(type === "Ready" && status === "True") ++numAvailableNodes;
    }
  });

  return (
    <Router>
      <Switch>
        <Route path='/nodes'>
          <div className={style.nodesContainer}>
            <div className={style.nodesContainerHeader}>
              {/* TODO: Add tileValue references */}
              <Tile tileHeader="Number of Nodes" tileValue={numNodes}/>
              <Tile tileHeader="Healthy Nodes" tileValue={numAvailableNodes}/>
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
        </Route>

        <Route path='/nodeview'>
          <NodeView 

          />
        </Route>
      </Switch>
    </Router>

  );
}
