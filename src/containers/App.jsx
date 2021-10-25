import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import components
import Sidebar from "../components/Sidebar.jsx";
// import ClusterConnect from '../components/ClusterConnect.jsx';
import Dashboard from "./Dashboard.jsx";
import Nodes from "./Nodes.jsx";
import Pods from "./Pods.jsx";
// import PodView from '../components/PodView.jsx"';
// import NodeView from '../components/NodeView.jsx"';

import "../assets/css/App.css";

export default function App() {
  return (
    <div>
      <Sidebar />
      <h1>Hello Team Kr8s!</h1>
      <p>Now for the fun part...</p>
      <Router>
        <div>
          <Switch>
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
