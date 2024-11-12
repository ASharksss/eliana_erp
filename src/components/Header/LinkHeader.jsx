import React from 'react';
import home from '../../assets/home.svg'
import styles from "./header.module.css"

const LinkHeader = ({title}) => {
  return (
    <div className={styles.mobile_title}>
      <div className={styles.wrapper}>
        <img src={home} alt=""/>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default LinkHeader;