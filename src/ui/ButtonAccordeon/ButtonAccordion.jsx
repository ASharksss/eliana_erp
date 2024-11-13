import React, {useState} from 'react';
import arrow from "../../assets/chevron-right.svg"
import styles from "./accordion.module.css"

const ButtonAccordion = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setOpen(!isOpen)}>
        <img src={arrow} alt=""/>
        <span>{isOpen ? "Скрыть" : "Раскрыть"}</span>
      </div>
      {
        isOpen ?
          <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
            <button>Привет</button>
          </div> : null
      }
    </div>
  );
};

export default ButtonAccordion;