import React from 'react';
import HeroBlock from "../../widgets/HeroBlock/HeroBlock";
import styles from "./desktop.module.css"

const DesktopHomePage = () => {
  return (
    <div className={styles.container}>
      <HeroBlock/>
    </div>
  );
};

export default DesktopHomePage;