import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainLayout } from "./containers/mainLayout-container";
import { FAQ } from "./presentational/FAQ.component";
import store from "../src/store/index";
import { getProductsOnPage } from "../src/actions/actions";
import { Provider } from "react-redux";
import Menu from "./containers/menu-container.component";
import DevTols from "./DevTools";
import ProductDetail from "./containers/productDetail-container.component";
import PageNotFound from "./presentational/pageNumber.component";
import Cart from "./containers/cart-container.component";

render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu>
        <Switch>
          {/* <Route path={"*"} component={PageNotFound} /> */}
          <Route exact path={"/:id/:by/:order"} component={MainLayout} />
          <Route path={"/cart"} component={Cart} />
          <Route path={"/product/:id"} component={ProductDetail} />
          <Route path={"/faq"} component={FAQ} />
        </Switch>
        <DevTols />
      </Menu>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getProductsOnPage());
