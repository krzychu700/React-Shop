import React, { Component } from "react";
import "./sideBar.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as actions from "../actions/actions";
import { bindActionCreators } from "redux";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <span> Sortuj:</span>
        <ul>
          <Link className="link" to={"/" + this.props.active + "/name/asc"}>
            <li
              className="sideBarItem"
              onClick={this.props.actions.sort.bind(this, {
                by: "name",
                order: "asc"
              })}
            >
              Nazwa A-Z
            </li>
          </Link>
          <Link className="link" to={"/" + this.props.active + "/name/desc"}>
            <li
              className="sideBarItem"
              onClick={this.props.actions.sort.bind(this, {
                by: "name",
                order: "desc"
              })}
            >
              Nazwa Z-A
            </li>
          </Link>
          <Link className="link" to={"/" + this.props.active + "/price/asc"}>
            <li
              className="sideBarItem"
              onClick={this.props.actions.sort.bind(this, {
                by: "price",
                order: "asc"
              })}
            >
              Cena rosnąco
            </li>
          </Link>
          <Link className="link" to={"/" + this.props.active + "/price/desc"}>
            <li
              className="sideBarItem"
              onClick={this.props.actions.sort.bind(this, {
                by: "price",
                order: "desc"
              })}
            >
              Cena malejąco
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

let mapStateToProps = function(store) {
  return {
    itemList: store.shopReducer.itemList,
    active: store.shopReducer.active,
    sortParams: store.shopReducer.sortParams
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
