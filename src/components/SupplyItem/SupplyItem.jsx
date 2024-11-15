import React from 'react';
import styles from "./supply.module.css"
import {NavLink} from "react-router-dom";

const SupplyItem = () => {
  return (
    <NavLink to={"/orders/1"} className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.customer}>от ПЭК</h1>
        <span className={styles.date}>от 21.03.2024</span>
      </div>
      <span className={styles.count}>12 товаров</span>
    </NavLink>
  );
};

export default SupplyItem;