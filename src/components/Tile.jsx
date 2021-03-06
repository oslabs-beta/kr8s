import React from 'react';
import style from '../assets/css/Tile.module.css';

// Tile Component is not currently used by Kr8s

export default function Tile(props) {
  

  return (
    <div className={style.tileContainer}>
      <h3 className={style.tileHeader}> {props.tileHeader} </h3>
      <h3 className={style.tileValue}> {props.tileValue} </h3>
    </div>
  );
}