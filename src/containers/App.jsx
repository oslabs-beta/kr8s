import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import components
import Sidebar from "../components/Sidebar.jsx";
import ClusterConnect from "../components/ClusterConnect.jsx";
import Dashboard from "./Dashboard.jsx";
import Nodes from "./Nodes.jsx";
import Pods from "./Pods.jsx";
// import PodView from '../components/PodView.jsx';
// import NodeView from '../components/NodeView.jsx';
// import List from "../components/List.jsx";
// import Tile from "../components/Tile.jsx";

import style from "../assets/css/App.module.css";

export default function App() {
//   Set connected to be true for development
//   !!TODO: Change useState value to false before deployment!!!
  const [connected, useConnected] = useState(true);

  // Accepts a path variable to connect to the given cluster
  function getClusterInfo(path) {
    // Set connected to true to display the sidebar
    useConnected(true);
    console.log("getClusterInfo run!");
  }

  return (
    <div>
      <Router>
        <div id={style.App}>
          {/* Display Sidebar only if we are connected to a cluster */}
          {connected && <Sidebar />}
          <div>
            <Switch>
              <Route exact path="/index.html">
                <ClusterConnect
                  clusters={["Cluster1", "Cluster2"]}
                  getClusterInfo={getClusterInfo}
                />
              </Route>
              <Route path="/dash">
                <Dashboard clusterName="Reland's Cluster"/>
              </Route>
              <Route path="/nodes">
                <Nodes />
              </Route>
              <Route path="/pods">
                <Pods />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}