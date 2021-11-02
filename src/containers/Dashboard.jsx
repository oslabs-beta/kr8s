import React, { useEffect, useState } from "react";

import Speedometer from "../components/Speedometer.jsx";
import Header from "../components/Header.jsx";

import style from "../assets/css/Dashboard.module.css";

export default function Dashboard(props) {
  

  return (
    <div className={style.DashboardContainer}>
      <Header headerContent={props.clusterName} />

      <div className={style.clusterNumbers}>
        <h3>Nodes Running: {props.numNodes}</h3>
        <h3>Pods Running: {props.numPods}</h3>
        <h3>Containers: 37</h3>
      </div>

      <div className={style.speedoBoxes}>
        <div className={style.speedoes}>
          {/* <Speedometer  src={cpu} />
          <Speedometer src={memory} />
          <Speedometer src={io} />
          <Speedometer src={disk} /> */}
          {/* using dashboard 6417 */}
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1635439862845&to=1635441662846&theme=dark&panelId=4"
            width="280"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1635439804187&to=1635441604187&theme=dark&panelId=5"
            width="280"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1635439813545&to=1635441613545&theme=dark&panelId=6"
            width="280"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1635439828243&to=1635441628243&theme=dark&panelId=7"
            width="280"
            height="200"
            frameborder="0"
          ></iframe>
        </div>

        <div className={style.speedoes}>
          {/* <Speedometer src={apiServer} />
          <Speedometer src={scheduler} />
          <Speedometer src={controller} />
          <Speedometer src={etcd} /> */}
          {/* using dashboard 12006 */}
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1635441183527&to=1635444783527&theme=dark&panelId=8"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1635441221311&to=1635444821311&theme=dark&panelId=2"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1635441208309&to=1635444808309&theme=dark&panelId=10"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1635441239546&to=1635444839546&theme=dark&panelId=12"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
