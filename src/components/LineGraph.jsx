import React from 'react';

import style from '../assets/css/LineGraph.module.css';

export default function LineGraph(props) {

  return (
    <div className={style.lineGraphContainer}>
      <iframe
        width="280px"
        height="200px"
        src={props.src || "https://tinyurl.com/mostyle-moproblem"}
        >
      </iframe>
    </div>
  );
}