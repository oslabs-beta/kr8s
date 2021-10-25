import React from "react";

import Speedometer from "../components/Speedometer.jsx";
import Header from "../components/Header.jsx";


import style from '../assets/css/Dashboard.module.css';

export default function Dashboard(props) {
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
          <Speedometer />
          <Speedometer />
          <Speedometer />
          <Speedometer />
        </div>

        <div className={style.speedoes}>
          <Speedometer />
          <Speedometer />
          <Speedometer />
          <Speedometer />
        </div>
      </div>
    </div>
  );
}
