import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'task 1',
      description: "Task 1 description",
      completed: false,
    },
    {
      id: '2',
      title: 'task 2',
      description: "Task 2 description",
      completed: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
    addTaks: (state, action) => {
      state.tasks.push(action.payload);
      // state.tasks = [...state.tasks, action.payload]
    }
  },
});

export const { addTaks } = todosSlice.actions;

export default todosSlice.reducer;