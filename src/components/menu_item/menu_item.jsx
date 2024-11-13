import React from 'react';
import styles from "./menu_item.module.css"
import arrow from "../../assets/arrow_right.svg"
import {NavLink} from "react-router-dom";


const MenuItem = ({text, image, link}) => {
  return (
    <NavLink to={link} className={styles.container}>
      <div className={styles.menu_item_block}>
        <img className={styles.image} src={image} alt=""/>
        <span className={styles.text}>{text}</span>
      </div>
      <img src={arrow} alt=""/>
    </NavLink>
  );
};

export default MenuItem;