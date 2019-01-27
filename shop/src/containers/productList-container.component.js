import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../actions/actions";
import ProductList from "../presentational/productList.component";
import { bindActionCreators } from "redux";
import PageNumbers from "../presentational/pageNumber.component";

class ProductListContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.pagesNumbers();
  }

  componentDidUpdate(prevProps) {
    // this.props.actions.activePage(this.props.match.params.id);
    if (this.props.match.params.id !== prevProps.active) {
      this.props.actions.activePage(this.props.match.params.id);
    }
    if (
      this.props.active !== prevProps.active ||
      this.props.sortParams.by !== prevProps.sortParams.by ||
      this.props.sortParams.order !== prevProps.sortParams.order ||
      this.props.page !== prevProps.page
    ) {
      this.props.actions.getProductsOnPage();
    }
    // if (
    //   this.props.match.params.id !== this.props.active ||
    //   this.props.match.params.by !== this.props.sortParams.by ||
    //   this.props.match.params.order !== this.props.sortParams.order
    // ) {
    //   console.log("działa");
    //   this.props.actions.aa(
    //     this.props.match.params.id,
    //     this.props.match.params.by,
    //     this.props.match.params.order
    //   );
    // }
    //sprawdzac matche w jednym ifie, w drugim propsy
  }

  click(e) {
    this.props.actions.getProduct(e.target.id);
  }

  render() {
    return (
      <div className="productListArea">
        <ProductList item={this.props.itemList} click={this.click} />
        <div className="pages">
          <ul className="pagesList">
            <PageNumbers
              page={this.props.page}
              sortParams={this.props.sortParams}
            />

            <Link
              className="link"
              to={
                this.props.active === this.props.page
                  ? "/" +
                    parseInt(this.props.active) +
                    "/" +
                    this.props.sortParams.by +
                    "/" +
                    this.props.sortParams.order
                  : "/" +
                    parseInt(this.props.active + 1) +
                    "/" +
                    this.props.sortParams.by +
                    "/" +
                    this.props.sortParams.order
              }
            >
              <i className="fas fa-arrow-right pageArrowRight" />
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

let mapStateToProps = function(store) {
  return {
    itemList: store.shopReducer.itemList,
    page: store.shopReducer.page,
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
  )(ProductListContainer)
);
