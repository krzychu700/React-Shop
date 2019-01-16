import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
    this.props.actions.getProductsOnPage();
    this.props.actions.getProducts();
    this.props.actions.sort({
      by: this.props.match.params.by,
      order: this.props.match.params.order
    });
  }

  componentDidUpdate(prevProps) {
    this.props.actions.activePage(this.props.match.params.id);

    if (
      this.props.active !== prevProps.active ||
      this.props.sortParams.by !== prevProps.sortParams.by ||
      this.props.sortParams.order !== prevProps.sortParams.order
    ) {
      this.props.actions.getProductsOnPage();
    }
    // if (
    //   this.props.match.params.id !== prevProps.active ||
    //   this.props.match.params.by !== prevProps.sortParams.by ||
    //   this.props.match.params.order !== prevProps.sortParams.order
    // ) {
    //   console.log(
    //   this.props.actions.aa(
    //     this.props.match.params.id,
    //     this.props.match.params.by,
    //     this.props.match.params.order
    //   );
    //   );
    // }
  }

  click(e) {
    this.props.actions.getProduct(e.target.id);
  }

  render() {
    return (
      <div>
        <ProductList item={this.props.itemList} click={this.click} />
        <div className="pages">
          <ul className="pagesList">
            <PageNumbers
              page={this.props.page}
              sortParams={this.props.sortParams}
            />
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
