import React, { Component } from "react";
import { Menu } from "../components/Menu";

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
