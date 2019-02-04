import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link, Redirect } from "react-router-dom";
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
    this.props.actions.getProductsOnPage();
  }

  componentDidUpdate(prevProps) {
    let liczba = parseInt(this.props.match.params.id, 10);
    if (
      this.props.active !== prevProps.active ||
      this.props.sortParams.by !== prevProps.sortParams.by ||
      this.props.sortParams.order !== prevProps.sortParams.order ||
      this.props.page !== prevProps.page
    ) {
      this.props.actions.getProductsOnPage();
    }
    if (!isNaN(liczba) && liczba !== this.props.active) {
      this.props.actions.activePage(liczba);
    }
    if (
      liczba !== this.props.active ||
      this.props.match.params.by !== this.props.sortParams.by ||
      this.props.match.params.order !== this.props.sortParams.order
    ) {
      this.props.actions.sort({
        by: this.props.match.params.by,
        order: this.props.match.params.order
      });
    }
    if (liczba > this.props.page && this.props.page !== 0) {
      this.props.history.push("/error");
    }
  }

  click(e) {
    this.props.actions.getProduct(e.target.id);
  }

  renderRedirectBy = () => {
    switch (this.props.match.params.by) {
      case "name":
        break;
      case "price":
        break;
      default:
        return <Redirect to="/error" />;
    }
  };

  renderRedirectOrder = () => {
    switch (this.props.match.params.order) {
      case "asc":
        break;
      case "desc":
        break;
      default:
        return <Redirect to="/error" />;
    }
  };

  render() {
    return (
      <div className="productListArea">
        <ProductList
          item={this.props.itemList}
          click={this.click}
          data={this.props.data}
        />
        <div className="pages">
          <ul className="pagesList">
            <PageNumbers
              page={this.props.page}
              sortParams={this.props.sortParams}
              active={this.props.active}
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

        {this.renderRedirectBy()}
        {this.renderRedirectOrder()}
      </div>
    );
  }
}

let mapStateToProps = function(store) {
  return {
    itemList: store.shopReducer.itemList,
    page: store.shopReducer.page,
    active: store.shopReducer.active,
    sortParams: store.shopReducer.sortParams,
    data: store.shopReducer.data,
    lastItems: store.shopReducer.lastItems
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
