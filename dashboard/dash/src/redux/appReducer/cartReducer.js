import { getLocalData, saveLocalData } from "../../utils/accessLocalStorage";
import * as actionTypes from "./actionTypes";

let cartItems = getLocalData("e-shop-cart") || [];

export const cartReducer = (state = { cartItems }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      console.log("THIS IS ITEM ", item);
      const existItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existItem) {
        let id = existItem.id;
        console.log(id);
        state.cartItems.forEach((el) => {
          if (el.id === id) {
            return (el.quantity = el.quantity + 1);
          }
          return el;
        });

        saveLocalData("e-shop-cart", [...state.cartItems]);
      } else {
        saveLocalData("e-shop-cart", [...state.cartItems, item]);
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case actionTypes.CHANGE_QUANTITY:
      const { id, quantity } = action.payload;
      console.log("NEW QUATITY ::",quantity);
    state.cartItems.forEach((el) => {
      if (el.id === id) {
        return (el.quantity = quantity);
      }
      return el;
    });

     saveLocalData("e-shop-cart", [...state.cartItems]);
    // }
    // else {
    //   saveLocalData("e-shop-cart", [...state.cartItems, item]);
    //   return { ...state, cartItems: [...state.cartItems, item] };
    // }

    case actionTypes.REMOVE_FROM_CART:
      saveLocalData(
        "e-shop-cart",
        state.cartItems.filter((product) => product.id !== action.payload)
      );

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
