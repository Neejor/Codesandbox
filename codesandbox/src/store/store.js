import allReducers from "../reducers/allreducers";
import { createStore, compose, applyMiddleware } from "redux";

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
myStore.subscribe(() => {
  console.log(myStore.getState());
});
console.log(myStore.getState());
//   myStore.dispatch(List());

export default myStore;
