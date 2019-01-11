import React, { Component } from "react";
import "./App.css";
import Product from "./components/Products.js";
import Menu from "./components/Menu.js";
import SideBar from "./components/SideBar.js";
import data from "./data.json";

export class App extends Component {
  state = {
    data: data,
    itemList: [],
    page: 0,
    active: 1
    // activeMenu: "home"
  };

  pagesNumber = () => {
    let a = data.length;
    let page = this.state.page;
    if (a > 10 && page <= a / 10) {
      let i = 0;
      for (i = 0; i < a; i = i + 10) {
        page++;
      }
      this.setState({
        page
      });
    }
  };

  onSortPriceDescending = () => {
    this.setState({
      itemList: this.state.data.sort((a, b) => {
        return b.price - a.price;
      })
    });
    this.prostaFunkcja(this.state.active);
  };

  onSortPriceAscending = () => {
    this.setState({
      itemList: this.state.data.sort((a, b) => {
        return a.price - b.price;
      })
    });
    this.prostaFunkcja(this.state.active);
  };

  onSortNameAscending = () => {
    this.setState({
      itemList: this.state.data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    });
    this.prostaFunkcja(this.state.active);
  };

  prostaFunkcja = page => {
    this.setState({
      itemList: this.state.data.slice((page - 1) * 10, page * 10 - 1)
    });
  };

  onSortNameDescending = () => {
    this.setState({
      itemList: this.state.data.sort((a, b) => {
        return b.name.localeCompare(a.name);
      })
    });
    this.prostaFunkcja(this.state.active);
  };

  activePageNumber = e => {
    const clicked = e.target.id;
    this.setState(
      {
        active: clicked
      },
      function stateUpdateComplete() {
        this.prostaFunkcja(this.state.active);
      }.bind(this)
    );
  };

  // activeMenuPage = e => {
  //   const clicked = e.target.id;
  //   console.log(clicked);
  //   this.setState({
  //     activeMenu: clicked
  //   });
  // };

  componentDidMount() {
    this.pagesNumber();
    this.prostaFunkcja(this.state.active);
  }

  render() {
    const product = this.state.itemList.map(item => (
      <Product
        key={item.id}
        name={item.name}
        price={item.price}
        picture={item.picture}
      />
    ));

    const numberOfPage = [...Array(this.state.page)].map((e, item) => (
      <li
        className={
          item + 1 == this.state.active ? "pagesItem active" : "pagesItem"
        }
        key={item + 1}
        id={item + 1}
        onClick={this.activePageNumber}
      >
        {item < 9 ? `0${item + 1}` : item + 1}
      </li>
    ));

    return (
      <div className="pageLayout">
        {/* <Menu
          activeMenu={this.state.activeMenu}
          activeMenuPage={this.activeMenuPage}
        /> */}
        <div className="pageContainer">
          <SideBar
            onSortPriceDescending={this.onSortPriceDescending}
            onSortPriceAscending={this.onSortPriceAscending}
            onSortNameAscending={this.onSortNameAscending}
            onSortNameDescending={this.onSortNameDescending}
          />
          <div>
            <div className="productsList">{product}</div>
            <div className="pages">
              <ul className="pagesList">{numberOfPage}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
