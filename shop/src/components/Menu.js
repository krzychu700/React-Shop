import React from "react";
import "./Menu.css";

const Menu = props => {
  return (
    <div className="menu">
      <div className="logoArea">
        <img className="logoPicture" src="/img/logo.png" alt="logo" />
      </div>

      <div className="menuArea">
        <ul className="menuList">
          <li className="menuItem">Home</li>
          <li className="menuItem">FAQ</li>
          <li className="menuItem">Regulamin</li>
          <li className="menuItem">Kontakt</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
