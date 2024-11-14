import React from 'react';
import StockCircle from "../../components/StockCircle/StockCircle";
import styles from "./stock.module.css";

const StockPage = () => {
  return (
    <div className={styles.wrapper}>
      <StockCircle text={"Фитиля"} type={"photo"}/>
      <StockCircle text={"Диффузоры"} type={"photo"}/>
      <StockCircle text={"Спреи"} type={"photo"}/>
      <StockCircle text={"Саше"} type={"photo"}/>
      <StockCircle text={"Наклейки"} type={"table"}/>
      <StockCircle text={"Химия"} type={"table"}/>
      <StockCircle text={"Бутылки"} type={"table"}/>
    </div>
  );
};

export default StockPage;