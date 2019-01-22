/* eslint-disable default-case */
import {
  SORT,
  GET_PAGES_NUMBERS,
  GET_PRODUCTS_ON_PAGE,
  ACTIVE_PAGE,
  GET_PRODUCT,
  ADD_TO_CART,
  DEL_FROM_CART,
  UPDATE_CART,
  PRODUCT_IN_CART_COUNTER,
  AA,
  aa
} from "../actions/actions";
import data from "../data.json";

const initialState = {
  data: data,
  itemList: [],
  page: 0,
  active: 1,
  sortParams: {
    by: "name",
    order: "desc"
  },
  selectedProduct: {},
  cart: [],
  cartID: null
};

const shopReducer = function(state = initialState, action) {
  //first init of project, calucation, how many pages we need
  function initial(state) {
    const productListLength = state.data.length;
    let page = state.page;
    if (productListLength > 10 && page <= productListLength / 10) {
      let i = 0;
      for (i = 0; i < productListLength; i = i + 10) {
        page++;
      }
    }
    return Object.assign({}, state, {
      page: page
    });
  }

  //sort function
  function sortProduct(state, action) {
    const sortBy = action.sortParams.by;
    const sortOrder = action.sortParams.order;
    const sortedItem = state.data.sort((a, b) => {
      if (sortBy === "price" && sortOrder === "desc") {
        return b.price - a.price;
      } else if (sortBy === "price" && sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortBy === "name" && sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "name" && sortOrder === "desc") {
        return b.name.localeCompare(a.name);
      }
    });
    console.log("sort", action.sortParams.order, state, sortedItem);
    return Object.assign({}, state, {
      itemList: [...sortedItem],
      sortParams: {
        by: sortBy,
        order: sortOrder
      }
    });
  }

  //function responsible for slicing data to show proper number
  function getProductsOnPagea(state) {
    const productsOnActivePage = state.data.slice(
      (state.active - 1) * 10,
      state.active * 10 - 1
    );
    console.log("getProducts", state.itemList);
    return Object.assign({}, state, {
      itemList: [...productsOnActivePage]
    });
  }

  // function aa(action) {
  //   const ddd = action.active;
  //   const bbb = action.by;
  //   const ccc = action.order;

  //   console.log(bbb);
  //   console.log(ccc);
  //   console.log(ddd);
  //   return Object.assign({}, state, {
  //     active: ddd,
  //     sortParams: {
  //       by: bbb,
  //       order: ccc
  //     }
  //   });
  // }
  switch (action.type) {
    case GET_PAGES_NUMBERS: {
      return initial(state);
    }

    case SORT: {
      return sortProduct(state, action);
    }

    case GET_PRODUCTS_ON_PAGE: {
      // return getProductsOnPagea(state);
      const activePage = state.data.slice(
        (state.active - 1) * 10,
        state.active * 10 - 1
      );
      return Object.assign({}, state, {
        itemList: [...activePage]
      });
    }

    case ACTIVE_PAGE:
      let clickedNumberOfPage = action.number;
      if (action.number === undefined) {
        clickedNumberOfPage = state.active;
      } else clickedNumberOfPage = action.number;

      return Object.assign({}, state, {
        active: clickedNumberOfPage
      });

    case GET_PRODUCT:
      const selectedProduct = state.data.find(
        product => product.id == action.id
      );
      return Object.assign({}, state, { selectedProduct });

    case ADD_TO_CART:
      const count = 3;
      const choosenProduct = state.data.find(
        product => product.id == action.id
      );
      choosenProduct.count = count;
      return Object.assign({}, state, {
        cart: [...state.cart, choosenProduct],
        cartID: action.id
      });

    case DEL_FROM_CART:
      const selectedProductToRemove = state.cart.filter(
        product => product.id !== action.id
      );
      return Object.assign({}, state, {
        cart: [...selectedProductToRemove]
      });

    case PRODUCT_IN_CART_COUNTER:
      let updatedCounter = state.data.find(product => product.id == action.id);
      updatedCounter = updatedCounter.count + 1;
      console.log(updatedCounter);
    // return Object.assign({}, state, {
    //   cart: [...state.cart, updatedCounter]
    // });

    // case UPDATE_CART:
    //   console.log("done");
    //   return Object.assign({}, state, {
    //     cart: state.cart
    //   });

    // case AA:
    //   return aa(action);
    // const ddd = action.active;
    // const bbb = action.by;
    // const ccc = action.order;

    // console.log(bbb);
    // console.log(ccc);
    // console.log(ddd);
    // return Object.assign({}, state, {
    //   active: ddd,
    //   sortParams: {
    //     by: bbb,
    //     order: ccc
    //   }
    // });
  }

  return state;
};

export default shopReducer;

//index.js - czy dobrze, ze najpierw GET_PRODUCTS_ON_PAGE
