/* eslint-disable default-case */
import {
  GET_DATA,
  SORT,
  GET_PRODUCTS_ON_PAGE,
  ACTIVE_PAGE,
  GET_PRODUCT,
  ADD_TO_CART,
  DEL_FROM_CART,
  PRODUCT_IN_CART_COUNTER,
  UPDATE_PRODUCTS_IN_MAGAZINE
} from "../actions/actions";
import dataJson from "../Data.json";

const initialState = {
  data: dataJson,
  itemList: [],
  page: 0,
  active: 1,
  sortParams: {
    by: "name",
    order: "desc"
  },
  selectedProduct: {},
  cart: [],
  lastItems: []
};

const shopReducer = function(state = initialState, action) {
  //sort function
  function sortProduct(state, action) {
    const sortBy = action.sortParams.by;
    const sortOrder = action.sortParams.order;
    // if (
    //   sortBy === state.sortParams.by &&
    //   sortOrder === state.sortParams.order
    // ) {
    //   return state;
    // }
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
    return Object.assign({}, state, {
      itemList: [...sortedItem],
      sortParams: {
        by: sortBy,
        order: sortOrder
      }
    });
  }

  //function responsible for slicing data to show proper number of products on page and in slider
  function getProductsOnPage(state) {
    const productsOnActivePage = state.data.slice(
      (state.active - 1) * 6,
      state.active * 6
    );
    const lastItems = state.data.filter(
      product => product.inMagazine <= 3 && product.inMagazine > 0
    );

    return Object.assign({}, state, {
      itemList: [...productsOnActivePage],
      lastItems: lastItems
    });
  }

  //function responsible for calculation of number of proper product in cart

  function productInCartCounter(state, action) {
    const objIndex = state.cart.findIndex(product => product.id == action.id);
    const updatedObj = {
      ...state.cart[objIndex],
      count: (state.cart[objIndex].count += action.value)
    };
    return Object.assign({}, state, {
      cart: [
        ...state.cart.slice(0, objIndex),
        updatedObj,
        ...state.cart.slice(objIndex + 1)
      ]
    });
  }

  function updateMagazine(state) {
    for (var i in state.data) {
      if (state.data.hasOwnProperty(i)) {
        for (var j in state.cart) {
          if (state.cart.hasOwnProperty(j)) {
            if (state.data[i].id === state.cart[j].id) {
              state.data[i].sold = state.cart[j].count;
              state.data[i].inMagazine =
                state.data[i].inMagazine - state.cart[j].count;
            }
          }
        }
      }
    }
    return Object.assign({}, state, {
      ...state,
      cart: []
    });
  }

  switch (action.type) {
    case GET_DATA: {
      console.log("1");
      const lastItems = dataJson.filter(product => {
        return product.inMagazine <= 3;
      });
      const productListLength = state.data.length;
      let page = state.page;
      if (productListLength > 6 && page <= productListLength / 6) {
        let i = 0;
        for (i = 0; i < productListLength; i = i + 6) {
          page++;
        }
      } else {
        page = 3;
      }
      return Object.assign({}, state, {
        lastItems,
        page
      });
    }

    case SORT: {
      return sortProduct(state, action);
    }

    case GET_PRODUCTS_ON_PAGE: {
      console.log("2");
      return getProductsOnPage(state);
    }

    case ACTIVE_PAGE:
      let clickedNumberOfPage = action.number;
      if (action.number === undefined) {
        clickedNumberOfPage = state.active;
      } else clickedNumberOfPage = action.number;

      return Object.assign({}, state, {
        active: parseInt(clickedNumberOfPage)
      });

    case GET_PRODUCT:
      const selectedProduct = state.data.find(
        product => product.id === action.id
      );
      selectedProduct.count = 0;
      return Object.assign({}, state, { selectedProduct });

    case ADD_TO_CART:
      let count = 0;

      const choosenProduct = state.data.find(
        product => product.id === action.id
      );
      const productInCart = state.cart.find(
        product => product.id === choosenProduct.id
      );
      if (choosenProduct.inMagazine !== 0) {
        if (productInCart) {
          if (productInCart.count < productInCart.inMagazine) {
            const objIndex = state.cart.findIndex(
              product => product.id === action.id
            );
            const updatedObj = {
              ...state.cart[objIndex],
              count: state.cart[objIndex].count + 1
            };
            return Object.assign({}, state, {
              cart: [
                ...state.cart.slice(0, objIndex),
                updatedObj,
                ...state.cart.slice(objIndex + 1)
              ],
              selectedProduct: {
                ...state.selectedProduct,
                count: state.selectedProduct.count + 1
              }
            });
          } else {
            return Object.assign({}, state, {
              selectedProduct: {
                ...state.selectedProduct,
                count: productInCart.inMagazine
              }
            });
          }
        } else {
          state.selectedProduct.count = count + 1;
          return Object.assign({}, state, {
            cart: [...state.cart, choosenProduct],
            ...selectedProduct
          });
        }
      } else {
        return Object.assign({}, state, {
          ...state
        });
      }

    case DEL_FROM_CART:
      const selectedProductToRemove = state.cart.filter(
        product => product.id !== action.id
      );
      return Object.assign({}, state, {
        cart: [...selectedProductToRemove]
      });

    case PRODUCT_IN_CART_COUNTER:
      return productInCartCounter(state, action);

    case UPDATE_PRODUCTS_IN_MAGAZINE:
      return updateMagazine(state);
  }

  return state;
};

export default shopReducer;

//index.js - czy dobrze, ze najpierw GET_PRODUCTS_ON_PAGE
