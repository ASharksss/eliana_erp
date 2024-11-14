import React from 'react';
import styles from "./circlepage.module.css"
import photo from "../../assets/stock.png";

const CircleItem = ({text}) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img src={photo} alt="" className={styles.image}/>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CircleItem;