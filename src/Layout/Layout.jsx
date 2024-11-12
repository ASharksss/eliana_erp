import React from 'react';
import DesktopHeader from "../components/Header/DesktopHeader";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <DesktopHeader/>
      <Outlet/>
    </div>
  );
};

export default Layout;