import * as actionTypes from "./actionTypes";

const initState = {
  searchedItem: [],
  query : ""
};

export const sortFilterReducer = (state = initState, action) => {
    // console.log(action)
  switch (action.type) {
    case actionTypes.SEARCH:
            state.query = action.payload
        return {...state, query: action.payload}
    default:
      return state;
  }
};
