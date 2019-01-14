import React, { Component } from "react";
import "./sideBar.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions/actions";
import { bindActionCreators } from "redux";

class SideBar extends Component {
  render() {
    return (
      <div>
        <span> Sortuj:</span>
        <ul>
          <li
            className="sideBarItem"
            onClick={this.props.actions.sort.bind(this, {
              by: "name",
              order: "asc"
            })}
          >
            Nazwa A-Z
          </li>
          <li
            className="sideBarItem"
            onClick={this.props.actions.sort.bind(this, {
              by: "name",
              order: "desc"
            })}
          >
            Nazwa Z-A
          </li>
          <li
            className="sideBarItem"
            onClick={this.props.actions.sort.bind(this, {
              by: "price",
              order: "asc"
            })}
          >
            Cena rosnąco
          </li>
          <li
            className="sideBarItem"
            onClick={this.props.actions.sort.bind(this, {
              by: "price",
              order: "desc"
            })}
          >
            Cena malejąco
          </li>
        </ul>
      </div>
    );
  }
}

let mapStateToProps = function(store) {
  return {
    itemList: store.shopReducer.itemList
  };
};

let mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)
);
