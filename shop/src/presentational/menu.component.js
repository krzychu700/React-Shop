import React from "react";
import "./menu.css";

import { NavLink } from "react-router-dom";

export const Menu = props => {
  return (
    <div className="menu">
      <div className="logoArea">
        <img className="logoPicture" src="/img/logo.png" alt="logo" />
      </div>

      <div className="menuArea">
        <ul className="menuList">
          <li
            className={
              "home" === props.activeMenu
                ? "menuItem menuItem--Active"
                : "menuItem"
            }
            id="home"
            onClick={props.activeMenuPage}
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className={
              "faq" === props.activeMenu
                ? "menuItem menuItem--Active"
                : "menuItem"
            }
            id="faq"
            onClick={props.activeMenuPage}
          >
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li
            className={
              "regulamin" === props.activeMenu
                ? "menuItem menuItem--Active"
                : "menuItem"
            }
            id="regulamin"
            onClick={props.activeMenuPage}
          >
            Regulamin
          </li>
          <li
            className={
              "kontakt" === props.activeMenu
                ? "menuItem menuItem--Active"
                : "menuItem"
            }
            id="kontakt"
            onClick={props.activeMenuPage}
          >
            Kontakt
          </li>
        </ul>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
