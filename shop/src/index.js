import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomeLayout } from "./containers/homeLayout-container.component";
import { FAQ } from "./presentational/FAQ.component";
import { Eula } from "./presentational/eula.component";
import { Contact } from "./presentational/contact.component";
import store from "../src/store/index";
import { getProductsOnPage } from "../src/actions/actions";
import { Provider } from "react-redux";
import MainLayout from "./containers/mainLayout-container.component";
import DevTols from "./DevTools";
import ProductDetail from "./containers/productDetail-container.component";
import { PageNotFound } from "./presentational/PageNotFound.component";
import Cart from "./containers/cart-container.component";

render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          {/* <Redirect from="/" to="/1/name/asc" /> */}
          <Route exact path={"/"} component={HomeLayout} />
          <Route exact path={"/:id/:by/:order"} component={HomeLayout} />
          <Route path={"/cart"} component={Cart} />
          <Route path={"/product/:id"} component={ProductDetail} />
          <Route path={"/faq"} component={FAQ} />
          <Route path={"/eula"} component={Eula} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/error"} render={() => <PageNotFound />} />
          <Redirect to={"/error"} />
        </Switch>
        <DevTols />
      </MainLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getProductsOnPage());
