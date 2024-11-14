import React from 'react';
import styles from "./circlepage.module.css"
import CircleItem from "./CircleItem";

const CirclePage = () => {
  return (
    <div className={styles.container}>
      <CircleItem text={"Bossman 12шт"}/>
      <CircleItem text={"Bossman 12шт"}/>
      <CircleItem text={"Bossman 12шт"}/>
      <CircleItem text={"Bossman 12шт"}/>
      <CircleItem text={"Bossman 12шт"}/>
      <CircleItem text={"Bossman 12шт"}/>
      <CircleItem text={"Bossman 12шт"}/>
      <CircleItem text={"Bossman 12шт"}/>
    </div>
  );
};

export default CirclePage;