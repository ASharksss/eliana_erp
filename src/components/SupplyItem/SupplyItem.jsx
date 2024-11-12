import React from 'react';
import styles from "./supply.module.css"

const SupplyItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.customer}>от ПЭК</h1>
        <span className={styles.date}>от 21.03.2024</span>
      </div>
      <span>12 товаров</span>
    </div>
  );
};

export default SupplyItem;