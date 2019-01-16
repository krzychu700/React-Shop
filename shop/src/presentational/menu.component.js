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
          <li className={"menuItem"}>
            <NavLink
              to={
                "/" +
                props.active +
                "/" +
                props.sortParams.by +
                "/" +
                props.sortParams.order
              }
            >
              Home
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink to="/cart">Koszyk</NavLink>
          </li>
          <li className={"menuItem"}>Regulamin</li>
          <li className={"menuItem"}>Kontakt</li>
        </ul>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
