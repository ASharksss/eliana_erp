import React from 'react';
import Menu_item from "../../components/menu_item/menu_item";
import boxes from "../../assets/boxes.svg";
import styles from "./mobile.module.css";
import truck from "../../assets/truck.svg"
import download from "../../assets/download.svg"
import calendar from "../../assets/calendar.svg"

const MobileHomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.good_morning}>Доброе утро, Username</h1>
        <span className={styles.compliment}>Сегодня солнце светит так ярко - прямо как ты! </span>
      </div>
      <nav>
        <Menu_item image={boxes} text={"Мой склад"} link={"/stock"}/>
        <Menu_item image={truck} text={"Поставки"} link={"/supplies"}/>
        <Menu_item image={download} text={"Отгрузки"} link={"/shipment"}/>
        <Menu_item image={calendar} text={"Заказы"} link={"/orders"}/>
      </nav>
    </div>
  );
};

export default MobileHomePage;