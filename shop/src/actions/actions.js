export const SORT_NAME_DESC = "SORT_NAME_DESC";
export const GET_PRODUCTS = "GET_PRODUCTS";

export function sortNameDesc(sortParams) {
  return {
    type: SORT_NAME_DESC,
    sortParams
  };
}

export function getProducts() {
  return {
    type: GET_PRODUCTS
  };
}
