import React, { Component } from "react";
import { Menu } from "../presentational/menu.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Menu active={this.props.active} sortParams={this.props.sortParams} />
        {this.props.children}
      </div>
    );
  }
}

let mapStateToProps = function(store) {
  return {
    active: store.shopReducer.active,
    sortParams: store.shopReducer.sortParams
  };
};

export default withRouter(connect(mapStateToProps)(MainLayout));
