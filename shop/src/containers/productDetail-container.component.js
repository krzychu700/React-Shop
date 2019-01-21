import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetail from "../presentational/productDetail.component";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

class ProductDetailContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getProduct(this.props.match.params.id);
    console.log(this.props.actions.getProduct(this.props.match.params.id));
  }

  getAA = id => {
    this.props.actions.addToCart(id);
  };
  render() {
    return (
      <ProductDetail product={this.props.selectedProduct} getAA={this.getAA} />
    );
  }
}

let mapStateToProps = function(store) {
  return {
    selectedProduct: store.shopReducer.selectedProduct,
    cart: store.shopReducer.cart
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
  )(ProductDetailContainer)
);