import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import headerReducer from "./headerSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    cart: cartReducer,
  },
});

export default store;
