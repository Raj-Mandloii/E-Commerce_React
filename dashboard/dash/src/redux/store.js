import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { reducer as appReducer } from "./appReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  appReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
