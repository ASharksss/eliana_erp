import React from 'react';
import SupplyItem from "../../components/SupplyItem/SupplyItem";
import styles from './list.module.css'
import {useWindowWidth} from "../../hooks/useWindowWidth";

const SupplyListPage = () => {
  const isMobile = useWindowWidth()

  return (
    <div>
      {isMobile ? <h1>Поставки</h1> : ""}
      <div className={styles.wrapper}>
        <SupplyItem/>
        <SupplyItem/>
        <SupplyItem/>
      </div>

    </div>
  );
};

export default SupplyListPage;