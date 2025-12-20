import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [],
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersList: (state, action) => {
      state.usersList = action.payload
    }
  }
});

export const { setUsersList } = usersSlice.actions;

export default usersSlice.reducer;