import React from "react";

import Speedometer from "../components/Speedometer.jsx";
import Header from "../components/Header.jsx";


import style from '../assets/css/Dashboard.module.css';

export default function Dashboard(props) {
  
  const { apiServer, controller, cpu, disk, etcd, io, memory, scheduler } = props.grafana;
  
  return (
    <div className={style.DashboardContainer}>
      <Header headerContent={props.clusterName}/>
      
      <div className={style.clusterNumbers}>
        <h3>Nodes Running: 8</h3>
        <h3>Pods Running: 21</h3>
        <h3>Containers: 37</h3>
      </div>

      <div className={style.speedoBoxes}>
        <div className={style.speedoes}>
          <Speedometer  src={cpu} />
          <Speedometer src={memory} />
          <Speedometer src={io} />
          <Speedometer src={disk} />
        </div>

        <div className={style.speedoes}>
        <Speedometer src={apiServer} />
          <Speedometer src={scheduler} />
          <Speedometer src={controller} />
          <Speedometer src={etcd} />
        </div>
      </div>
    </div>
  );
}
