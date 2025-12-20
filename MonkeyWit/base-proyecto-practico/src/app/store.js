import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/userSlice";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    counter: counterSlice,
  },
  devTools: true
})