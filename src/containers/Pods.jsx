import React, { useEffect, useState } from "react";

import Banner from "../components/Banner.jsx";
import List from "../components/List.jsx";

import styles from "../assets/css/Pods.module.css";

export default function Pods(props) {
  const [myPod, setMyPod] = useState({});

  function setCurrentPod(podName) {
    for (let i = 0; i < podsValues.length; i++) {
      if (podsValues[i].pod === podName) {
        setMyPod(podsValues[i]);
        return;
      }
    }
  }

  let runningPods = 0,
    pendingPods = 0,
    failedPods = 0,
    unknownPods = 0,
    succeededPods = 0;

  const podsValues = [];

  const podsHeaders = [
    { id: "pod", label: "Pod", minWidth: 100, align: "center" },
    { id: "initialized", label: "Initialized", minWidth: 100, align: "center" },
    { id: "ready", label: "Ready", minWidth: 100, align: "center" },
    { id: "containersReady", label: "Containers Ready", minWidth: 100, align: "center" },
    { id: "podScheduled", label: "Pod Scheduled", minWidth: 100, align: "center" },
    { id: "numContainers", label: "Number of Containers", minWidth: 100, align: "center" },
  ];

  props.pods.forEach((pod) => {
    const podValues = {};

    // Increment count for the current Pod Status
    switch (pod.status.phase) {
      case "Running":
        runningPods++;
        break;
      case "Pending":
        pendingPods++;
        break;
      case "Failed":
        failedPods++;
        break;
      case "Unknown":
        unknownPods++;
        break;
      case "Succeeded":
        succeededPods++;
        break;
    }

    // Build Current Pod Values object and add to the podsValues Array
    podValues["pod"] = pod.metadata.name;
    podValues["initialized"] = pod.status.conditions[0].status;
    podValues["ready"] = pod.status.conditions[1].status;
    podValues["containersReady"] = pod.status.conditions[2].status;
    podValues["podScheduled"] = pod.status.conditions[3].status;
    podValues["numContainers"] = pod.spec.containers.length;
    podValues["containers"] = pod.status.containerStatuses;

    podsValues.push(podValues);
  });

  return (
    <div>
      <div className={styles.podsContainer}>
        <div className={styles.podsContainerHeader}>
          <Banner
            width="1130"
            items={[
              { header: "PODS RUNNING", value: runningPods },
              { header: "PODS PENDING", value: pendingPods },
              { header: "FAILED PODS", value: failedPods },
              { header: "UNKNOWN PODS", value: unknownPods },
              { header: "SUCCEEDED PODS", value: succeededPods },
            ]}
          />
        </div>

        <div className={styles.podsContainerMain}>
        <div id={styles.columnLeft}>
          <iframe id={styles.firstPodiFrame}
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=48"
            width="264"
            height="200"
            frameborder="1"
            className={styles.podsiframe}
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=50"
            width="264"
            height="200"
            frameborder="1"
            className={styles.podsiframe}
          ></iframe>
          <iframe
            src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=10"
            width="550"
            height="200"
            frameborder="1"
            className={styles.podsiframe}
          ></iframe>
        </div>

          <div id={styles.columnRight}>
            <iframe
              src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=12"
              width="550"
              height="200"
              frameborder="1"
              className={styles.podsiframe}
            ></iframe>
            <iframe
              src="http://localhost:32000/d-solo/sO3bv1Fnz/kr8s-dashboard?orgId=1&theme=dark&panelId=14"
              width="550"
              height="200"
              frameborder="1"
              className={styles.podsiframe}
            ></iframe>
          </div>
        </div>

        <div className={styles.podsContainerList}>
          {/*<h3>Deployed Pods</h3>*/}
          <List
            listValueHeaders={podsHeaders}
            listValue={podsValues}
            setCurrentTarget={setCurrentPod}
            info={myPod}
            reroute="/podview"
          />
       </div>

      </div>
    </div>
  );
}
