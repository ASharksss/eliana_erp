import React from 'react';
import styles from "./filter.module.css"
import arrow from "../../assets/chevron-right.svg"

const Filter = () => {
  return (
    <div className={styles.wrapper}>
      <select className={styles.select}>
        <option value="">Фильтр</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </select>
      <img src={arrow} alt=""/>
    </div>
    
  );
};

export default Filter;
