import React from 'react';
import arrow from '../../assets/arrow_right.svg'
import styles from './button.module.css'
import {NavLink} from "react-router-dom";
const WidgetButton = ({link}) => {
  return (
    <NavLink to={link}>
      <button className={styles.button}>
        <span>Перейти</span>
        <img src={arrow} alt=""/>
      </button>
    </NavLink>

  );
};

export default WidgetButton;