import React from 'react';
import styles from './her_block.module.css'
import bottle from '../../assets/bottle.png'
import WidgetButton from "../../ui/button/WidgetButton";

const HeroBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Склад</h1>
        <div className={styles.blocks}>
          <div className={styles.item}>
            <img src={bottle} alt="" className={styles.image}/>
            <span>Фитиля</span>
          </div>
          <div className={styles.item}>
            <img src={bottle} alt="" className={styles.image}/>
            <span>Фитиля</span>
          </div>
          <div className={styles.item}>
            <img src={bottle} alt="" className={styles.image}/>
            <span>Фитиля</span>
          </div>
          <div className={styles.item}>
            <img src={bottle} alt="" className={styles.image}/>
            <span>Фитиля</span>
          </div>
          <div className={styles.item}>
            <img src={bottle} alt="" className={styles.image}/>
            <span>Фитиля</span>
          </div>
          <div className={styles.item}>
            <img src={bottle} alt="" className={styles.image}/>
            <span>Фитиля</span>
          </div>
        </div>
      </div>
      <div>
        <WidgetButton/>
      </div>
    </div>

  );
};

export default HeroBlock;