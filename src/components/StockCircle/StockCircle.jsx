import React from 'react';
import photo from "../../assets/stock.png"
import styles from "./circle.module.css"

const StockCircle = () => {
  return (
    <div >
      <img src={photo} alt="" className={styles.image}/>
    </div>
  );
};

export default StockCircle;