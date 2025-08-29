import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product-reducer";
import { store } from "..";

const rootReducer = combineReducers({
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispath = typeof store.dispatch;
export default rootReducer;
