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

render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu>
        <Switch>
          <Route exact path={"/"} component={MainLayout} />
          <Route path={"/product/:id"} component={ProductDetail} />
          <Route path={"/faq"} component={FAQ} />
          {/* <Route exact path="*" component={PageNotFound} /> */}
        </Switch>
        <DevTols />
      </Menu>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getProductsOnPage());
