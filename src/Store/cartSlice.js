import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    decItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    incItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    clearCart(state) {
      state.cart = [];
    },

    bookmark(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.isBookmarked = true;
    },

    removeBookmark(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.isBookmarked = false;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  deleteCart,
  clearCart,
  decItemQuantity,
  incItemQuantity,
  removeBookmark,
  bookmark,
} = cartSlice.actions;

export function getTotalPrice(state) {
  const amount = state.cart.cart.reduce(
    (acc, item) => item.totalPrice + acc,
    0,
  );
  return amount;
}

export function getTotalQuantity(state) {
  const quantity = state.cart.cart.reduce(
    (acc, item) => item.quantity + acc,
    0,
  );
  return quantity;
}
