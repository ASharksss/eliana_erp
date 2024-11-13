import React from 'react';
import box from "../../assets/box.svg"
import arrow from "../../assets/arrow_right.svg"
import styles from "./button.module.css"

const FunctionButton = ({text}) => {
  return (
    <button className={styles.button}>
      <div className={styles.wrapper}>
        <img src={box} alt=""/>
        <span>{text}</span>
      </div>
      <img src={arrow} alt=""/>
    </button>
  );
};

export default FunctionButton;