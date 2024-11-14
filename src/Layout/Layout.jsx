import React from 'react';
import DesktopHeader from "../components/Header/DesktopHeader";
import {Outlet, useLocation} from "react-router-dom";
import {useWindowWidth} from "../hooks/useWindowWidth";
import LinkHeader from "../components/Header/LinkHeader";
import styles from './layout.module.css'
import DetailHeader from "../components/Header/DetailHeader";

const Layout = () => {
  const isMobile = useWindowWidth()
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter(Boolean)
  const pathLevel = pathSegments.length

  let title =
    location.pathname === "/supplies" ? "Поставки" :
      location.pathname === "/shipment" ? "Отгрузки" :
        location.pathname === "/orders" ? "Заказы" :
          location.pathname === "/stock" ? "Склад" : ""

  if (!isMobile) {
    return (
      <div className={styles.layout}>
        <DesktopHeader/>
        <Outlet/>
      </div>
    )
  }

  if (pathLevel === 0) {
    return <div className={styles.layout}>
      <DesktopHeader/>
      <Outlet/>
    </div>
  } else if (pathLevel === 1) {
    return <div>
      <LinkHeader title={title}/>
      <Outlet/>
    </div>
  } else if (pathLevel === 2) {
    return <div className={styles.layout}>
      <DetailHeader text={"Поставка"}/>
      <Outlet/>
    </div>
  }

};

export default Layout;