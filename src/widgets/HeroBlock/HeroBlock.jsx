import React from 'react';
import styles from './her_block.module.css'
import WidgetButton from "../../ui/button/WidgetButton";
import HeroItem from "./HeroItem";

const HeroBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Склад</h1>
        <div className={styles.blocks}>
          <HeroItem/>
          <HeroItem/>
          <HeroItem/>
          <HeroItem/>
          <HeroItem/>
          <HeroItem/>
        </div>
      </div>
      <div>
        <WidgetButton/>
      </div>
    </div>

  );
};

export default HeroBlock;