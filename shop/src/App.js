import React, { Component } from "react";
import "./App.css";
import Product from "./components/Products.js";
import Menu from "./components/Menu.js";
import SideBar from "./components/SideBar.js";
import data from "./Data.json";

class App extends Component {
  state = {
    data: data,
    itemList: [],
    page: 1
  };

  strony = () => {
    let a = data.length;
    let page = this.state.page;
    console.log(a);
    if (a > 4 && page <= a / 4) {
      let i = 0;
      for (i = 0; i < a; i = i + 4) {
        page++;
      }
      this.setState({
        page
      });
    }

    console.log(page);
  };

  onSortPriceDescending = () => {
    this.setState({
      itemList: this.state.data.sort((a, b) => {
        return b.price - a.price;
      })
    });
  };

  onSortPriceAscending = () => {
    this.setState({
      itemList: this.state.data.sort((a, b) => {
        return a.price - b.price;
      })
    });
  };

  onSortNameAscending = () => {
    this.setState({
      itemList: this.state.data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    });
  };

  prostaFunkcja = page => {
    this.setState({
      itemList: this.state.data.splice((page - 1) * 10, page * 10 - 1)
    });
  };

  onSortNameDescending = () => {
    this.setState({
      itemList: this.state.data.sort((a, b) => {
        return b.name.localeCompare(a.name);
      })
    });
  };

  render() {
    const product = this.state.data.map(item => (
      <Product
        key={item.id}
        name={item.name}
        price={item.price}
        picture={item.picture}
      />
    ));

    const aaa = [...Array(this.state.page)].map((e, item) => (
      <button>{item + 1}</button>
    ));

    return (
      <div className="pageLayout">
        <button onClick={this.strony}>sda</button>
        <Menu />
        <div className="pageContainer">
          <div>{aaa}</div>
          <SideBar
            onSortPriceDescending={this.onSortPriceDescending}
            onSortPriceAscending={this.onSortPriceAscending}
            onSortNameAscending={this.onSortNameAscending}
            onSortNameDescending={this.onSortNameDescending}
          />
          <div className="productsList">{product}</div>
        </div>
      </div>
    );
  }
}

export default App;
