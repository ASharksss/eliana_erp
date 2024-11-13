import React from 'react';
import SupplyItem from "../../components/SupplyItem/SupplyItem";
import styles from './list.module.css'
import {useWindowWidth} from "../../hooks/useWindowWidth";
import FunctionButton from "../../ui/FunctionButton/FunctionButton";

const SupplyListPage = () => {
  const isMobile = useWindowWidth()

  return (
    <div className={styles.container}>
      {!isMobile ? <h1 className={styles.title}>Поставки</h1> : ""}
      <FunctionButton text={"Оформить поставку"}/>
      <div className={styles.wrapper}>
        <SupplyItem/>
        <SupplyItem/>
        <SupplyItem/>
      </div>
    </div>
  );
};

export default SupplyListPage;