import React from 'react';
import HeroBlock from "../../widgets/HeroBlock/HeroBlock";
import styles from "./desktop.module.css"
import MiddleWidget from "../../widgets/MiddleWidget/MiddleWidget";

const DesktopHomePage = () => {
  return (
    <div className={styles.container}>
      <HeroBlock/>
      <div className={styles.middle_container}>
        <MiddleWidget title={"Отгрузки"} />
        <MiddleWidget title={"Отгрузки"}/>
        <MiddleWidget title={"Отгрузки"}/>
      </div>

    </div>
  );
};

export default DesktopHomePage;