import React from 'react';

import style from '../assets/css/LineGraph.module.css';

export default function LineGraph(props) {

  return (
    <div className={style.lineGraphContainer}>
      <iframe
        width="450"
        height="200px"
        frameborder="0"
        src={props.src || "https://tinyurl.com/mostyle-moproblem"}
        >
      </iframe>
    </div>
  );
}