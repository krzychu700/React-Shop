import React, { Component } from "react";
import ProductList from "./productList-container.component";
import SideBar from "./sideBar-container.component";
import "./mainLayout.css";

export class MainLayout extends Component {
  render() {
    return (
      <div className="pageContainer">
        <SideBar />
        <ProductList />
      </div>
    );
  }
}
