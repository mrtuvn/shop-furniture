import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./app.slice";
import cartReducer from "./cart.slice";

const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
  // Add other reducers here as needed
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
