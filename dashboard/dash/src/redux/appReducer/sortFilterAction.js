import * as actionTypes from "./actionTypes";

export const searchedQuery = (query) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SEARCH, payload: query });
  } catch (error) {
    dispatch({ type: actionTypes.SEARCH_ERROR, payload: error.message });
  }
};

export const sortData = (param) => async (dispatch) => {
  
  try {
    dispatch({ type: actionTypes.SORT_SUCCESS, payload: param });
  } catch (error) {
    dispatch({ type: actionTypes.SORT_FAILURE, payload: error.message });
  }
};

export const sortbyCategory = (param) => async (dispatch) => {
  let cate = param === "All" ? "" : param;
  // console.log(cate)
  // console.log(param)
  try {
    dispatch({ type: actionTypes.SORT_BY_CATEGORY, payload: cate });
  } catch (error) {
    dispatch({ type: actionTypes.SORT_BY_CATEGORYERROR, payload: error.message });
  }
};
