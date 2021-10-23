import React from 'react';


export default function Tile(props) {
  
  return (
    <div>
      <h5> {props.tileHeader} </h5>
      <h5> {props.tileValue} </h5>
    </div>
  );
}