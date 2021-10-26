import React from 'react';

import style from '../assets/css/Speedometer.module.css';

export default function Speedometer(props) {

  return (
    <div className={style.speedometerContainer}>
      <iframe
        width="200px"
        height="220px"
        src={props.src || "https://tinyurl.com/jrVsrDev"}
        >
      </iframe>
    </div>
  );
}