import * as types from "./actionTypes";
import { getLocalData, saveLocalData } from "../../utils/accessLocalStorage";

const initialState = {
  isAuth: getLocalData("ecommerce-token") ? true : false,
  token: getLocalData("ecommerce-token") || "",
  profileData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, isLoading: true };

    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false };

    case types.REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case types.LOGIN_SUCCESS:
      saveLocalData("ecommerce-token", payload);
      return { ...state, isLoading: false, isAuth: true, token: payload };
      
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };

    case types.PROFILE_SUCCESS:
      return { ...state, profileData: payload };
    default:
      return state;
  }
};

export { reducer };
