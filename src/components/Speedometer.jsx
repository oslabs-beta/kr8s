import React from "react";

import style from "../assets/css/Speedometer.module.css";

export default function Speedometer(props) {
  return (
    <div className={style.speedometerContainer}>
      <iframe
        width="280px"
        height="200px"
        frameborder="0"
        src={props.src || "https://tinyurl.com/jrVsrDev"}
      ></iframe>
    </div>
  );
}
