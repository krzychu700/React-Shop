import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../presentational/cart.component";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

class CartContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.actions.getProduct(this.props.match.params.id);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.cart !== prevProps.cart) {
  //     this.props.actions.updateCart();
  //   }
  // }

  delProduct = id => {
    // let aa = 0;
    // aa = id;
    // console.log(id);
    return this.props.actions.defFromCart(id);
  };

  cartCounter = id => {
    return this.props.actions.productInCartCount(id);
  };

  render() {
    return (
      <Cart
        product={this.props.selectedProduct}
        cart={this.props.cart}
        delProduct={this.delProduct}
        cartCounter={this.cartCounter}
      />
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
  )(CartContainer)
);
