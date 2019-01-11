import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import "./index.css";
import { MainLayout } from "./components/MainLayout";
import { App } from "./App";
import { FAQ } from "./components/FAQ";
import store from "../src/store/index";
import { getProducts } from "../src/actions/actions";
import { Provider } from "react-redux";
import Menu from "./presentational/menu.component";
import ProductListContainer from "../src/containers/productList-container.component";
import DevTols from "./DevTools";

// class App2 extends React.Component {
// render(
//   // ) {
//   // const PageNotFound = () => <h1>404 Not Found</h1>;
//   // return (
//   <BrowserRouter store={store}>
//     <MainLayout>
//       <Switch>
//         <Route exact path={"/"} component={App} />
//         <Route exact path={"/faq"} component={FAQ} />
//         {/* <Route exact path="*" component={PageNotFound} /> */}
//       </Switch>
//     </MainLayout>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
// }
// }

render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu>
        <Switch>
          <Route exact path={"/"} component={ProductListContainer} />
          <Route exact path={"/faq"} component={FAQ} />
          {/* <Route exact path="*" component={PageNotFound} /> */}
        </Switch>
        <DevTols />
      </Menu>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getProducts());

// ReactDOM.render(<App2 />, document.getElementById("root"));
