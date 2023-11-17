import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import registerSlice from "./registerSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    registration: registerSlice,
  },
});
