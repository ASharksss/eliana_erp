import React from 'react';
import styles from "./her_block.module.css";
import bottle from "../../assets/bottle.png";

const HeroItem = () => {
  return (
    <div className={styles.item}>
      <img src={bottle} alt="" className={styles.image}/>
      <span>Фитиля</span>
    </div>
  );
};

export default HeroItem;