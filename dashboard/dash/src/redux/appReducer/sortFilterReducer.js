import * as actionTypes from "./actionTypes";
const initState = {
  searchedItem: [],
  query: "",
  sortParam: "",
  sortByCategory:""
};

export const sortFilterReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      state.query = action.payload;
      return { ...state, query: action.payload };

    case actionTypes.SORT_SUCCESS:
      //  console.log(action.payload)
      return { ...state, sortParam: action.payload };

    case actionTypes.SORT_BY_CATEGORY:
      return {...state, sortByCategory: action.payload}
    default:
      return state;
  }
};
