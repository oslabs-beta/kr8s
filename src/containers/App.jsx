import React, { useState } from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from "react-router-dom";

// Import components
import Sidebar from "../components/Sidebar.jsx";
import ClusterConnect from '../components/ClusterConnect.jsx';
import Dashboard from "./Dashboard.jsx";
import Nodes from "./Nodes.jsx";
import Pods from "./Pods.jsx";
// import PodView from '../components/PodView.jsx"';
// import NodeView from '../components/NodeView.jsx"';


import "../assets/css/App.css";

export default function App() {

  const [connected, useConnected] = useState(false);
  return (
    <div>
      {/* Display Sidebar only if we are not in the root path ('/') */}
      {/* <Sidebar /> */}

      <Router>
        <div>
          <Switch>
            <Route exact="/">
              <ClusterConnect clusters={["Cluster1", "Cluster2"]}/>
            </Route>
            <Route path="/dash">
              <Dashboard />
            </Route>
            <Route path="/nodes">
              <Nodes />
            </Route>
            <Route path="/pods">
              <Pods />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
