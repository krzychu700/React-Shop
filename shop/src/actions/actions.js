export const SORT = "SORT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PAGES_NUMBERS = "GET_PAGES_NUMBERS";
export const GET_PRODUCTS_ON_PAGE = "GET_PRODUCTS_ON_PAGE";
export const ACTIVE_PAGE = "ACTIVE_PAGE";
export const GET_PRODUCT = "GET_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_FROM_CART = "DEL_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";
export const AA = "AA";

export function sort(sortParams) {
  return {
    type: SORT,
    sortParams
  };
}

export function getProducts() {
  return {
    type: GET_PRODUCTS
  };
}

export function pagesNumbers() {
  return {
    type: GET_PAGES_NUMBERS
  };
}

export function getProductsOnPage() {
  return {
    type: GET_PRODUCTS_ON_PAGE
  };
}

export function activePage(number) {
  return {
    type: ACTIVE_PAGE,
    number
  };
}

export function getProduct(id) {
  return {
    type: GET_PRODUCT,
    id
  };
}

export function updateCart() {
  return {
    type: UPDATE_CART
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id
  };
}

export function defFromCart(id) {
  return {
    type: DEL_FROM_CART,
    id
  };
}

export function aa(by, order, active) {
  return {
    type: AA,
    active,
    by,
    order
  };
}
