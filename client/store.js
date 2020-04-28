import { createStore, combineReducers } from "redux";
import userDataReducer from "./reducers/userDataReducer";

const rootReducer = combineReducers({
  userDataReducer,
});

// When Combining reducers, it doesn't work WHY?
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// Using individual reducer works
const store = createStore(
  userDataReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
