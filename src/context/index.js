import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
// import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
