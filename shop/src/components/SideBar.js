import React from "react";
import "./SideBar.css";

const SideBar = props => {
  return (
    <div>
      <span> Sortuj:</span>
      <ul>
        <li className="sideBarItem" onClick={() => props.onSortNameAscending()}>
          Nazwa A-Z
        </li>
        <li
          className="sideBarItem"
          onClick={() => props.onSortNameDescending()}
        >
          Nazwa Z-A
        </li>
        <li
          className="sideBarItem"
          onClick={() => props.onSortPriceAscending()}
        >
          Cena rosnąco
        </li>
        <li
          className="sideBarItem"
          onClick={() => props.onSortPriceDescending()}
        >
          Cena malejąco
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
