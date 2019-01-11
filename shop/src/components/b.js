import React, { Component } from "react";
import "./App.css";
import Product from "./components/Products.js";
import Menu from "./components/Menu.js";
import SideBar from "./components/SideBar.js";
import data from "./Data.json";

export class B extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.itemList.map(item => (
      <Product
        key={item.id}
        name={item.name}
        price={item.price}
        picture={item.picture}
      />
    ));

    return (
      <div className="pageLayout">
        <div className="pageContainer">
          <div>
            <div className="productsList">{product}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default B;
