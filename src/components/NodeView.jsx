import React from 'react';

import LineGraph from "../components/LineGraph.jsx";
import Header from "../components/Header.jsx";
import Tile from "../components/Tile.jsx";

import styles from "../assets/css/NodeView.module.css";


export default function NodeView(props) {

  const headerContent = `Node: ${props.nodeName} - ${props.nodeId}`;
  // const headerContent = 'This is the Node View';
  
  return (

    <div className={styles.containersContainer}>
      <Header headerContent={headerContent} />
      
      <div className={styles.containersContainerHeader}>
          
          <div className={styles.lineGraph}>
            <LineGraph />
            <h2>CPU</h2>
          </div>
          
          <div className={styles.lineGraph}>
            <LineGraph />
            <h2>Disk Usage</h2>
          </div>
          
          <div className={styles.lineGraph}>
            <LineGraph />
            <h2>Memory</h2>
          </div>
      
      </div>

      <div className={styles.nodeNumbers}>
        <h3>READY</h3>
        <h3>|</h3>
        <h3>Disk Pressure: 27%</h3>
        <h3>|</h3>
        <h3>Memory Pressure: 43%</h3>
        <h3>|</h3>
        <h3>PID Pressure: 21%</h3>
        <h3>|</h3>
        <h3>Network</h3>
      </div>

    </div>
  );
}