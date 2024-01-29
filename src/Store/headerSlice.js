import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  sortBy: "recent",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    updateQuery(state, action) {
      state.query = action.payload.toLowerCase();
    },

    sortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export default headerSlice.reducer;
export const { updateQuery, sortBy } = headerSlice.actions;
