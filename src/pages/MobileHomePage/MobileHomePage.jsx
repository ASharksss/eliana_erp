import React from 'react';
import Menu_item from "../../components/menu_item/menu_item";
import boxes from "../../assets/boxes.svg";
import styles from "./mobile.module.css";

const MobileHomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.good_morning}>Доброе утро, Username</h1>
        <span className={styles.compliment}>Сегодня солнце светит так ярко - прямо как ты! </span>
      </div>
      <nav>
        <Menu_item image={boxes} text={"Мой склад"}/>
        <Menu_item image={boxes} text={"Мой склад"}/>
        <Menu_item image={boxes} text={"Мой склад"}/>
        <Menu_item image={boxes} text={"Мой склад"}/>
      </nav>
    </div>
  );
};

export default MobileHomePage;