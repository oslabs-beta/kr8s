import React from 'react';

// Import components
import Sidebar from '../components/Sidebar';
import ClusterConnect from '../components/ClusterConnect';
import Dashboard from './Dashboard';
import Nodes from './Nodes';
import Pods from './Pods';
import PodView from '../components/PodView';
import NodeView from '../components/NodeView';



import '../assets/css/App.css';

export default function App() {
  return (
    <div>
      <h1>Hello Team Kr8s!</h1>

      <p>Now for the fun part...</p>
    </div>
  )
}