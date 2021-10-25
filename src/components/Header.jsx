import React from 'react';
import style from '../assets/css/Header.module.css';

export default function Header(props) {
  
  return (
    <div className={style.Header}>
      <h1 className={style.headerContent}>{props.headerContent}</h1>
    </div>
  );
}