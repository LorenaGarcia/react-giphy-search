import { createStore } from "redux";
import RootReducer from "../reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Store = (initialState) => {
  const store = createStore(RootReducer, initialState, applyMiddleware(thunk));

  return store;
};

export default Store;
