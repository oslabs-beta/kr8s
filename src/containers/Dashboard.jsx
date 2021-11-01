import React from "react";

import Speedometer from "../components/Speedometer.jsx";
import Header from "../components/Header.jsx";

import style from "../assets/css/Dashboard.module.css";

export default function Dashboard(props) {
  const { apiServer, controller, cpu, disk, etcd, io, memory, scheduler } =
    props.grafana;

  return (
    <div className={style.DashboardContainer}>
      <Header headerContent={props.clusterName} />

      <div className={style.clusterNumbers}>
        <h3>Nodes Running: 8</h3>
        <h3>Pods Running: 21</h3>
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
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&theme=dark&panelId=4"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&theme=dark&panelId=5"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&theme=dark&panelId=6"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&theme=dark&panelId=7"
            width="280"
            height="180"
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
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&theme=dark&panelId=8"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&theme=dark&panelId=2"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&theme=dark&panelId=10"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&theme=dark&panelId=12"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
