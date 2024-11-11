import React from 'react';
import arrow from '../../assets/arrow_right.svg'
import styles from './button.module.css'
const WidgetButton = () => {
  return (

    <button className={styles.button}>
      <span>Перейти</span>
      <img src={arrow} alt=""/>
    </button>
  );
};

export default WidgetButton;