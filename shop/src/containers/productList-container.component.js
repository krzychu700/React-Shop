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
  }

  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active) {
      this.props.actions.getProductsOnPage();
    }
  }

  activePage(e) {
    // this.props.actions.activePage(e.target.value);
    console.log(e.target.value);
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
              activePage={this.activePage}
              // onClick={this.activePage.bind(this)}
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
