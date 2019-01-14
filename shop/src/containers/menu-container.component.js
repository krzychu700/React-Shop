import React, { Component } from "react";
import { Menu } from "../presentational/menu.component";

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
