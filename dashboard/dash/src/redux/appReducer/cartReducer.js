import { getLocalData, saveLocalData } from "../../utils/accessLocalStorage";
import * as actionTypes from "./actionTypes";

let cartItems = getLocalData("e-shop-cart") || [];

export const cartReducer = (state = { cartItems }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existItem) {
        let id = existItem.id;
        console.log(id);
       let a = state.cartItems.map((el) => {
          if (el.id === id) {
            console.log("THE KEY IS MATCHING ")
            // return (el.quantity = ++el.quantity);
            return {...el, quantity: ++el.quantity};
          }
          return el;
        });
        console.log("NEW STATE",a)
         saveLocalData("e-shop-cart", [...a]);
      } else {
        saveLocalData("e-shop-cart", [...state.cartItems, item]);
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case actionTypes.CHANGE_QUANTITY:
      const { id, quantity } = action.payload;
      console.log("NEW QUATITY ::", quantity);
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
