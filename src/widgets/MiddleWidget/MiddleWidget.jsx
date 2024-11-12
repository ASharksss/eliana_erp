import React from 'react';
import styles from './widget.module.css'
import SupplyItem from "../../components/SupplyItem/SupplyItem";
import WidgetButton from "../../ui/WidgetButton/WidgetButton";

const MiddleWidget = ({title, type, link}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <SupplyItem/>
      <SupplyItem/>
      <SupplyItem/>
      <div className={styles.button}>
        <WidgetButton link={link}/>
      </div>

    </div>
  );
};

export default MiddleWidget;