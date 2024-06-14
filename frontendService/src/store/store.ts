import { configureStore } from "@reduxjs/toolkit";
import  rootReducer  from "../config/reducer/combineReducers";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;