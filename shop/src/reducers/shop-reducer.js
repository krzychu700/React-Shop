/* eslint-disable default-case */
import {
  SORT,
  GET_PRODUCTS,
  GET_PAGES_NUMBERS,
  GET_PRODUCTS_ON_PAGE,
  ACTIVE_PAGE,
  GET_PRODUCT,
  AA
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
  selectedProduct: {}
};

const shopReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log("1");
      return Object.assign({}, state, { itemList: state.data });

    case SORT: {
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
      const activePage = state.data.slice(
        (state.active - 1) * 10,
        state.active * 10 - 1
      );

      return Object.assign({}, state, {
        itemList: [...activePage],
        sortParams: {
          by: sortBy,
          order: sortOrder
          //...action.sortParams
        }
      });
    }

    case GET_PAGES_NUMBERS:
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

    case GET_PRODUCTS_ON_PAGE:
      console.log("2");
      const activePage = state.data.slice(
        (state.active - 1) * 10,
        state.active * 10 - 1
      );
      return Object.assign({}, state, {
        itemList: [...activePage]
      });

    case ACTIVE_PAGE:
      const clickedNumberOfPage = action.number;
      return Object.assign({}, state, {
        active: clickedNumberOfPage
      });

    case GET_PRODUCT:
      const selectedProduct = state.data.find(
        product => product.id == action.id
      );
      return Object.assign({}, state, { selectedProduct });

    case AA:
      const bbb = action.by;
      const ccc = action.order;
      const ddd = action.active;
      return Object.assign({}, state, {
        active: ddd,
        sortParams: {
          by: bbb,
          order: ccc
          //...action.sortParams
        }
      });
  }

  return state;
};

export default shopReducer;

//index.js - czy dobrze, ze najpierw GET_PRODUCTS_ON_PAGE
