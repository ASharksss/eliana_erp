import React from 'react';
import styles from './header.module.css'
import {NavLink} from "react-router-dom";

const DesktopHeader = () => {
  return (
    <NavLink  to={"/"}>
      <span className={styles.logo}>ELIANA</span>
      <span className={styles.span}>work</span>
    </NavLink>
  );
};

export default DesktopHeader;