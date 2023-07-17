import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/api/user";
import userReducer from "./../features/user/userSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
