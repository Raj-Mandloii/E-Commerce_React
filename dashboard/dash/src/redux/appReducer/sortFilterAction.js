import * as actionTypes from "./actionTypes";

export const searchedQuery = (query) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SEARCH, payload: query });
  } catch (error) {
    dispatch({ type: actionTypes.SEARCH_ERROR, payload: error.message });
  }
};
