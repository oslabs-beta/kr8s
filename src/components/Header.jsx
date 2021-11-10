import React from 'react';
import style from '../assets/css/Header.module.css';

// Header component is not currently used by Kr8s

export default function Header(props) {
  
  return (
    <div className={style.Header}>
      <h1 className={style.headerContent}>{props.headerContent}</h1>
    </div>
  );
}