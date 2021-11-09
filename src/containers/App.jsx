import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
import Sidebar from "../components/Sidebar.jsx";
import ClusterConnect from "../components/ClusterConnect.jsx";
import Dashboard from "./Dashboard.jsx";
import Nodes from "./Nodes.jsx";
import Pods from "./Pods.jsx";
import PodView from "../components/PodView.jsx";
import NodeView from "../components/NodeView.jsx";
import style from "../assets/css/App.module.css";
import apiCalls from "../APIcalls.js";

export default function App() {
  
  const [connected, useConnected] = useState(false);
  const [clusterName, useClusterName] = useState("");
  const [pods, setPods] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [numContainers, setNumContainers] = useState(0);

  // Accepts a path variable to connect to the given cluster
  function getClusterInfo(path) {
    // Set connected to true to display the sidebar
    useConnected(true);
    // TODO: Retrieve information necessary for the selected cluster
    useClusterName("Local Cluster");

    apiCalls.fetchNodes().then((data) => {
      setNodes(data.items);
      // console.log("Node data: ", data);
    });

    apiCalls.fetchPods().then((data) => {
      setPods(data.items);

      // Retrieve number of containers by iterating over pods
      let containerCount = 0;
      for(const pod of data.items) {
        containerCount += pod.spec.containers.length;
      }
      setNumContainers(containerCount);
    });
  }

  return (
    // Conditionally style the app background
    <div style={(connected) ? {"background": "#161519"} : {"background": "linear-gradient(to bottom, rgb(28, 28, 33), rgb(33, 48, 70))"} }>
      <Router>
        <div className={style.AppContainer}>
          {/* Display Sidebar only if we are connected to a cluster */}
          {connected && <Sidebar clusterName={clusterName} />}
          <div className={style.routerWrapper}>
          
            <header id={style.header}>{clusterName}</header>

            <Switch>
              <Route exact path="/index.html">
                <ClusterConnect
                  clusters={["Local Cluster"]}
                  getClusterInfo={getClusterInfo}
                />
              </Route>

              <Route path="/dash">
                <Dashboard
                  numNodes={nodes.length}
                  numPods={pods.length}
                  numContainers={numContainers}
                />
              </Route>

              <Route path="/nodes">
                <Nodes
                  nodes={nodes}
                />
              </Route>

              <Route
                path="/nodeview"
                render={(props) => (
                  <NodeView
                    {...props}
                  />
                )}
              />

              <Route path="/pods">
                <Pods
                  pods={pods}
                />
              </Route>

              <Route
                path="/podview"
                render={(props) => (
                  <PodView
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
