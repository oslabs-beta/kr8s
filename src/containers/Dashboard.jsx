import React from "react";

import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";

import style from "../assets/css/Dashboard.module.css";

export default function Dashboard(props) {
  return (
    <div className={style.DashboardContainer}>
      <Header headerContent={props.clusterName} />

      <Banner items={[
        {header: 'NODES RUNNING' ,value: props.numNodes},
        {header: 'PODS RUNNING' ,value: props.numPods},
        {header: 'CONTAINERS' ,value: 37}
        ]}
      />

      <div className={style.speedoBoxes}>
        <div className={style.speedoes}>
          {/* <Speedometer  src={cpu} />
          <Speedometer src={memory} />
          <Speedometer src={io} />
          <Speedometer src={disk} /> */}
          {/* using dashboard 6417 */}
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=46"
            width="280"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=42"
            width="280"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=40"
            width="280"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=44"
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
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=16"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=18"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=20"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=22"
            width="280"
            height="180"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
