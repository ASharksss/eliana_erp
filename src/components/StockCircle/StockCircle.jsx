import React from 'react';
import photo from "../../assets/stock.png"
import styles from "./circle.module.css"
import {NavLink} from "react-router-dom";

const StockCircle = ({text, type}) => {

  return (
    <NavLink to={type === "photo" ? "/circlePage": "/tablePage" }>
      <div className={styles.wrapper}>
        <img src={photo} alt="" className={styles.image}/>
        <span>{text}</span>
      </div>
    </NavLink>

  );
};

export default StockCircle;