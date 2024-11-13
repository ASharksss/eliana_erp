import React from 'react';
import arrow from "../../assets/arrow_left.svg"
import styles from "./header.module.css"
import {NavLink, useNavigate} from "react-router-dom";

const DetailHeader = ({text}) => {

  const navigate = useNavigate()

  return (
    <div className={styles.detail_header}>
      <div onClick={() => navigate(-1)}>
        <img src={arrow} alt=""/>
      </div>

      <span className={styles.detail_title}>{text}</span>
    </div>
  );
};

export default DetailHeader;