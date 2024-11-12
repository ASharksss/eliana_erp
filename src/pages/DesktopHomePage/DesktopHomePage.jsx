import React from 'react';
import HeroBlock from "../../widgets/HeroBlock/HeroBlock";
import styles from "./desktop.module.css"
import MiddleWidget from "../../widgets/MiddleWidget/MiddleWidget";

const DesktopHomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1 className={styles.good_morning}>Доброе утро, Username</h1>
        <span className={styles.compliment}>Сегодня солнце светит так ярко - прямо как ты! </span>
      </div>
      <HeroBlock/>
      <div className={styles.middle_container}>
        <MiddleWidget title={"Отгрузки"} link={"/shipment"}/>
        <MiddleWidget title={"Поставки"} link={"/supplies"}/>
        <MiddleWidget title={"Заказы"} link={"/orders"}/>
      </div>

    </div>
  );
};

export default DesktopHomePage;