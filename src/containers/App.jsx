import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
import Sidebar from "../components/Sidebar.jsx";
import ClusterConnect from "../components/ClusterConnect.jsx";
import Dashboard from "./Dashboard.jsx";
import Nodes from "./Nodes.jsx";
import Pods from "./Pods.jsx";

import style from "../assets/css/App.module.css";

const grafana = {};

// Adding dummy data to the grafana object
grafana["cluster"] = {
  cpu: "https://source.unsplash.com/random/200x220?speedometer",
  memory: "https://source.unsplash.com/random/200x220?speedometer",
  io: "https://source.unsplash.com/random/200x220?speedometer",
  disk: "https://source.unsplash.com/random/200x220?speedometer",
  apiServer: "https://source.unsplash.com/random/200x220?speedometer",
  scheduler: "https://source.unsplash.com/random/200x220?speedometer",
  controller: "https://source.unsplash.com/random/200x220?speedometer",
  etcd: "https://source.unsplash.com/random/200x220?speedometer",
};
grafana["nodes"] = {
  cpu: "https://source.unsplash.com/random/200x220?speedometer",
  memory: "https://source.unsplash.com/random/200x220?speedometer",
  disk: "https://source.unsplash.com/random/200x220?speedometer"
};
grafana["pods"] = {
  cpu: "https://source.unsplash.com/random/200x220?speedometer",
  memory: "https://source.unsplash.com/random/200x220?speedometer",
  restarts: "https://source.unsplash.com/random/200x220?speedometer"
};

export default function App() {
//   Set connected to be true for development
//   !!TODO: Change useState value to false before deployment!!!
  const [connected, useConnected] = useState(false);
  const [clusterName, useClusterName] = useState('');

  // Accepts a path variable to connect to the given cluster
  function getClusterInfo(path) {
    // Set connected to true to display the sidebar
    useConnected(true);

    // TODO: Retrieve information necessary for the selected cluster
    // TODO: Store information in the grafana object and related state
    useClusterName("MicroServices Limited")

    
  }

  return (
    <div>
      <Router>
        <div id={style.App}>
          {/* Display Sidebar only if we are connected to a cluster */}
          {connected && <Sidebar />}
          <div className={style.routerWrapper}>
            <Switch>
              <Route exact path="/index.html">
                <ClusterConnect
                  clusters={["MicroServices Limited", "Market's Be Crazy"]}
                  getClusterInfo={getClusterInfo}
                />
              </Route>
              <Route path="/dash">
                <Dashboard 
                  clusterName={clusterName} 
                  grafana={grafana.cluster}
                />
              </Route>
              <Route path="/nodes">
                <Nodes 
                  clusterName={clusterName}
                  grafana={grafana.nodes}
                />
              </Route>
              <Route path="/pods">
                <Pods 
                  clusterName={clusterName}
                  grafana={grafana.pods}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}