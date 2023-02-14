import { getLocalData, saveLocalData } from "../../utils/accessLocalStorage";
import * as actionTypes from "./actionTypes";

let cartItems = getLocalData("e-shop-cart") || [];

export const cartReducer = (
  state = { cartItems, isDirectbuyer: false },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      // console.log("THIS IS ITEM", item);
      const existItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existItem) {
        // console.log("ITEM ALREADY exists");
        let id = existItem.id;
        state.cartItems.forEach((el) => {
          if (el.id == id) {
            return (el.quantity = el.quantity + 1);
          }
          return el;
        });

        saveLocalData("e-shop-cart", [...state.cartItems]);
      } else {
        item.quantity = 1;
        saveLocalData("e-shop-cart", [...state.cartItems, item]);
        return { ...state, cartItems: [...state.cartItems, item] };
      }
      break;
    case actionTypes.CHANGE_QUANTITY:
      const { id, quantity } = action.payload;

      state.cartItems.forEach((el) => {
        if (el.id === id) {
          return (el.quantity += quantity);
        }
        return el;
      });

      saveLocalData("e-shop-cart", [...state.cartItems]);
      return { ...state, cartItems: [...state.cartItems] };

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
    case actionTypes.DIRECT_BUYER: {
      // console.log("IS BUYER " + action.payload)
      return { ...state, isDirectbuyer: action.payload };
    }
    case actionTypes.EMPTY_CART: {
      console.log("empty cart reducer");
      saveLocalData("e-shop-cart", []);
      return {...state, cartItems: getLocalData("e-shop-cart") || []};
    }
    default:
      return state;
  }
};
