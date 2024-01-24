import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

// const store = configureStore(reducer:rootReducer);
const store = configureStore({
  reducer: rootReducer,
  applyMiddleware,
});

export default store;
