import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { reducer as appReducer } from "./appReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";
import { cartReducer } from "./appReducer/cartReducer";
import { sortFilterReducer } from "./appReducer/sortFilterReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  appReducer,
  cartReducer,
  sortFilterReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
