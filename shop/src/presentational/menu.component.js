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
              className="link"
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
            <NavLink className="link" to="/faq">
              FAQ
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink className="link" to="/eula">
              Regulamin
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink className="link" to="/contact">
              Kontakt
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink className="link" to="/cart">
              <i className="fas fa-shopping-bag cartIcon" />{" "}
            </NavLink>
          </li>
        </ul>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
