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

// const grafana = {};

// // Adding dummy data to the grafana object
// grafana["cluster"] = {
//   cpu: "https://source.unsplash.com/random/200x220?speedometer",
//   memory: "https://source.unsplash.com/random/200x220?speedometer",
//   io: "https://source.unsplash.com/random/200x220?speedometer",
//   disk: "https://source.unsplash.com/random/200x220?speedometer",
//   apiServer: "https://source.unsplash.com/random/200x220?speedometer",
//   scheduler: "https://source.unsplash.com/random/200x220?speedometer",
//   controller: "https://source.unsplash.com/random/200x220?speedometer",
//   etcd: "https://source.unsplash.com/random/200x220?speedometer",
// };
// grafana["nodes"] = {
//   cpu: "https://source.unsplash.com/random/200x220?speedometer",
//   memory: "https://source.unsplash.com/random/200x220?speedometer",
//   disk: "https://source.unsplash.com/random/200x220?speedometer",
// };
// grafana["pods"] = {
//   cpu: "http://localhost:32000/d/AAOMjeHmk/kubernetes-pod-and-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1635436646489&to=1635440246490&viewPanel=3",
//   memory: "http://localhost:32000/d/AAOMjeHmk/kubernetes-pod-and-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1635436837809&to=1635440437809&theme=dark&viewPanel=2",
//   restarts: "http://localhost:32000/d/AAOMjeHmk/kubernetes-pod-and-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1635436921706&to=1635440521706&theme=dark&viewPanel=8",
// };

export default function App() {
  //   Set connected to be true for development
  //   !!TODO: Change useState value to false before deployment!!!
  const [connected, useConnected] = useState(false);
  const [clusterName, useClusterName] = useState("");
  const [pods, setPods] = useState([]);
  const [nodes, setNodes] = useState([]);

  // Accepts a path variable to connect to the given cluster
  function getClusterInfo(path) {
    // Set connected to true to display the sidebar
    useConnected(true);
    // TODO: Retrieve information necessary for the selected cluster
    // TODO: Store information in the grafana object and related state
    useClusterName("MicroServices Limited");

    apiCalls.fetchNodes().then((data) => {
      setNodes(data.items);
      console.log("Node data: ", data);
    });

    apiCalls.fetchPods().then((data) => {
      setPods(data.items);
      console.log("Pod data: ", data);
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
                  clusters={["MicroServices Limited"]}
                  getClusterInfo={getClusterInfo}
                />
              </Route>

              <Route path="/dash">
                <Dashboard
                  numNodes={nodes.length}
                  numPods={pods.length}
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
