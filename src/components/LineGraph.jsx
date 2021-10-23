import React from 'react';


export default function LineGraph(props) {
  
  return (
    <div>
      <iframe
        width="25%"
        height="15%"
        src={props.src}
        >
      </iframe>
    </div>
  );
}

