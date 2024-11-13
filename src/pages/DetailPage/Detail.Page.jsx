import React from 'react';
import ListItem from "../../components/ListItem/ListItem";
import Filter from "../../ui/Filter/Filter";
import styles from "./detail.module.css"
import ButtonAccordion from "../../ui/ButtonAccordeon/ButtonAccordion";
import {useWindowWidth} from "../../hooks/useWindowWidth";
import arrow from "../../assets/arrow_left.svg"
import {useNavigate} from "react-router-dom";

const DetailPage = () => {

  const isMobile = useWindowWidth()
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>

      <div className={styles.list_wrapper}>
        {
          !isMobile ?
            <h1 className={styles.title} onClick={() => navigate(-1)}>
              <img src={arrow} alt=""/>
              Поставка №212234
            </h1>
            : null
        }

        <div className={styles.date}>
          от 13.11.24
        </div>
        {/* <ButtonAccordion/>*/}
        <Filter/>
        <div className={styles.pre_table}>
          <span className={styles.text}>Товар</span>
          <span className={styles.span}>Кол-во</span>
        </div>
        <div className={styles.list}>
          <ListItem/>
          <ListItem/>
        </div>
      </div>


    </div>
  );
};

export default DetailPage;