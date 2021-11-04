import React from 'react';
import style from '../assets/css/Banner.module.css';

export default function Banner(props) {
  // Map over props.items
  const items = props.items.map(item => {
    return (
      <div className={style.items} key={item.header}>
        <p className={style.itemHeading}>{item.header}</p>
        <p className={style.itemValue}>{item.value}</p>
      </div>
    );
  })

  return (
    <div className={style.banner}>
      {items}
    </div>
  );
}