import { combineReducers, createStore } from "redux";
import { authReducer } from "./Auth/authReducer";
import { todoReducer } from "./Todo/todoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer
});

export const myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(myStore.getState());
