import React from 'react';
import StockCircle from "../../components/StockCircle/StockCircle";
import styles from "./stock.module.css";

const StockPage = () => {
  return (
    <div className={styles.wrapper}>
      <StockCircle/>
      <StockCircle/>
      <StockCircle/>
      <StockCircle/>
      <StockCircle/>
      <StockCircle/>
      <StockCircle/>
    </div>
  );
};

export default StockPage;