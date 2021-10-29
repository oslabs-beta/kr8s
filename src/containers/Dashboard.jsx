import React, { useEffect, useState } from "react";

import Speedometer from "../components/Speedometer.jsx";
import Header from "../components/Header.jsx";

import style from "../assets/css/Dashboard.module.css";
import apiCalls from "../APIcalls.js";

export default function Dashboard(props) {
  const [numPods, setNumPods] = useState(0);
  const [numNodes, setNumNodes] = useState(0);

  useEffect(() => {
    apiCalls.fetchNodes()
      .then(data => {
        setNumNodes(data.items.length);
        console.log('Node data: ', data);
      });

    apiCalls.fetchPods()
      .then(data => {
        setNumPods(data.items.length);
        console.log('Pod data: ', data);
      });
  }, [numPods, numNodes])

  return (
    <div className={style.DashboardContainer}>
      <Header headerContent={props.clusterName} />

      <div className={style.clusterNumbers}>
        <h3>Nodes Running: {numNodes}</h3>
        <h3>Pods Running: {numPods}</h3>
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
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1635439804187&to=1635441604187&theme=dark&panelId=5"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1635439813545&to=1635441613545&theme=dark&panelId=6"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1635439828243&to=1635441628243&theme=dark&panelId=7"
            width="450"
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
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1635441221311&to=1635444821311&theme=dark&panelId=2"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1635441208309&to=1635444808309&theme=dark&panelId=10"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1635441239546&to=1635444839546&theme=dark&panelId=12"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1635441246551&to=1635444846551&theme=dark&panelId=4"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
