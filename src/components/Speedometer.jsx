import React from 'react';


export default function Speedometer(props) {
  
  return (
    <div>
      <iframe
        width="15%"
        height="15%"
        src={props.src}
        >
      </iframe>
    </div>
  );
}