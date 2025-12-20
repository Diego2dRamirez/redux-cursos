import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const todosSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {

  },
});

export const { } = todosSlice.actions;

export default todosSlice.reducer;