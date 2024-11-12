import React from 'react';
import DesktopHeader from "../components/Header/DesktopHeader";
import {Outlet, useLocation} from "react-router-dom";
import {useWindowWidth} from "../hooks/useWindowWidth";
import LinkHeader from "../components/Header/LinkHeader";
import styles from './layout.module.css'

const Layout = () => {
  const isMobile = useWindowWidth()
  const location = useLocation()
  let title =
    location.pathname === "/supplies" ? "Поставки" :
      location.pathname === "/shipment" ? "Отгрузки" :
        location.pathname === "/orders" ? "Заказы" : ""

  return (
    <div className={styles.layout}>
      {!isMobile ? <DesktopHeader/> : <LinkHeader title={title}/>}
      <Outlet/>
    </div>
  );
};

export default Layout;