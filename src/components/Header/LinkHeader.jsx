import React from 'react';
import home from '../../assets/home.svg'
import styles from "./header.module.css"
import {NavLink} from "react-router-dom";

const LinkHeader = ({title}) => {
  return (
    <div className={styles.mobile_title}>
      <NavLink to={"/"}>
        <div className={styles.wrapper}>
          <img src={home} alt=""/>
          <span>{title}</span>
        </div>
      </NavLink>

    </div>
  );
};

export default LinkHeader;