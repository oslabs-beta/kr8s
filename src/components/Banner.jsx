import React from 'react';
import style from '../assets/css/Banner.module.css';

/*
  Banner will receive items to display in props as an array of objects
  Expected format: [{header: 'string', value: integer}]

  Banner will display dynamically based on the number of items received
*/
export default function Banner(props) {

  const items = props.items.map(item => {
    return (
      <div className={style.items} key={item.header}>
        <p className={style.itemHeading}>{item.header}</p>
        <p className={style.itemValue}>{item.value}</p>
      </div>
    );
  })

  return (
    <div className={style.banner} style={(props.width) ? {"width": `${props.width}px`} : {}}>
      {items}
    </div>
  );
}