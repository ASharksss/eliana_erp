import React from 'react';
import Menu_item from "../components/menu_item/menu_item";
import boxes from "../assets/boxes.svg";

const MobileHomePage = () => {
  return (
    <div>
      <nav>
        <Menu_item image={boxes} text={"Мой склад"}/>
        <Menu_item image={boxes} text={"Мой склад"}/>
        <Menu_item image={boxes} text={"Мой склад"}/>
        <Menu_item image={boxes} text={"Мой склад"}/>
      </nav>
    </div>
  );
};

export default MobileHomePage;