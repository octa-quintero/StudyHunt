import { combineReducers } from "@reduxjs/toolkit";
import RootReducer from "../reducer/reducer";

const rootReducer = combineReducers({
  user: RootReducer,
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;