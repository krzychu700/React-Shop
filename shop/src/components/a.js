import React, { Component } from "react";
import { connect } from "react-redux";
import { sortNameDesc } from "../actions/actions";
import B from "./b";

class A extends Component {
  constructor(props) {
    super(props);
  }

  sort(props) {
    this.props.dispatch(sortNameDesc(props));
  }

  render() {
    return (
      <div>
        <button onChange={this.sort.bind(this)}>asdas</button>
        <B />
      </div>
    );
  }
}

export default A;
