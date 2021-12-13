import { createStore } from "redux";
import { combineReducers } from "redux";
import { employerReducer } from "./reducers/employerReducer";

const rootReducer = combineReducers({ employer: employerReducer });

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
