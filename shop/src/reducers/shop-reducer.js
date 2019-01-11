/* eslint-disable default-case */
import { SORT_NAME_DESC, GET_PRODUCTS } from "../actions/actions";
import data from "../data.json";

const initialState = {
  data: data,
  itemList: [],
  page: 0,
  active: 1,
  sortParams: {
    by: "name",
    order: "desc"
  }
};

const shopReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, { itemList: state.data });

    case SORT_NAME_DESC: {
      const sortBy = action.sortParams.by;
      const sortOrder = action.sortParams.order;
      const sortedItem = state.data.sort((a, b) => {
        return b.price - a.price;
      });
      return Object.assign({}, state, {
        itemList: [...sortedItem],
        sortParams: {
          by: sortBy,
          order: sortOrder
          //...action.sortParams
        }
      });
    }
  }

  return state;
};

export default shopReducer;
