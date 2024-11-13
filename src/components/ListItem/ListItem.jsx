import React from 'react';
import styles from "./listItem.module.css"

const ListItem = () => {
  return (
    <div className={styles.wrapper}>
      <span>Товар</span>
      <input type="number" placeholder={"Кол-во"} className={styles.input}/>
    </div>
  );
};

export default ListItem;