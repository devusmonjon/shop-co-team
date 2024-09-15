import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      let index = state.value.findIndex((i) => i._id === action.payload._id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((i) => i._id !== action.payload._id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
    clearWishlist: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
