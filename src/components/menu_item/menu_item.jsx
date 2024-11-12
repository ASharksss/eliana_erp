import React from 'react';
import styles from "./menu_item.module.css"
import arrow from "../../assets/arrow_right.svg"


const MenuItem = ({text, image}) => {
  return (
    <button className={styles.container}>
      <div className={styles.menu_item_block}>
        <img className={styles.image} src={image} alt=""/>
        <span>{text}</span>
      </div>
      <img src={arrow} alt=""/>
    </button>
  );
};

export default MenuItem;