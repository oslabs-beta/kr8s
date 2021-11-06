import React from "react";

import Banner from "../components/Banner.jsx";

import style from "../assets/css/Dashboard.module.css";

export default function Dashboard(props) {
  return (
    <div className={style.DashboardContainer}>
      <Banner
        items={[
          { header: "NODES RUNNING", value: props.numNodes },
          { header: "PODS RUNNING", value: props.numPods },
          { header: "CONTAINERS", value: 37 },
        ]}
      />

      <div id={style.grafanaDisplays}>
        
        <div className={style.grafanaColumn}>
          
          <div className={style.speedoRow}>
            <iframe
                className={style.speedo}
                src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=46"
                frameBorder="1"
              ></iframe>

              <iframe
                className={style.speedo}
                src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=42"
                frameBorder="1"
              ></iframe>
          </div>
          
          
          <iframe
            className={style.linegraph}
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=16"
            frameBorder="1"
          ></iframe>

          <iframe
            class={style.linegraph}
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=18"
            frameBorder="1"
          ></iframe>
        </div>

        <div className={style.grafanaColumn}>
          <div className={style.grafanaColumn}>

            <div className={style.speedoRow}>
              <iframe
                className={style.speedo}
                src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=40"
                frameBorder="1"
              ></iframe>
              <iframe
                className={style.speedo}
                src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=44"
                frameBorder="1"
              ></iframe>
            </div>

            <iframe
              className={style.linegraph}
              src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=20"
              frameBorder="1"
            ></iframe>

            <iframe
              className={style.linegraph}
              src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=22"
              frameBorder="1"
            ></iframe>

          </div>
        </div>

      </div>
    </div>
  );
}
