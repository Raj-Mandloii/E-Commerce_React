
import * as actionTypes from "./actionTypes";



export const addToCart = (item, quantity) => async (dispatch) => {
  try {
    // const { data } = await axios.get(`${url}/product/${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...item } });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const changeQuantity = (quantity,id) => (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_QUANTITY, payload: {id,quantity} });
  };

export const removedFromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
