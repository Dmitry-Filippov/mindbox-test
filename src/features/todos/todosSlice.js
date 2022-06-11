import { createSlice } from "@reduxjs/toolkit";

export const todosSlise = createSlice({
  name: "todos",
  initialState: {
    todosList: [
      {
        name: "сделать дела",
        isDone: false,
      },
      {
        name: "проверить почту",
        isDone: false,
      },
      {
        name: "отдохнуть",
        isDone: true,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todosList.push(action.payload);
    },
    toggleIsDone: (state, action) => {
      if (state.todosList[action.payload].isDone) {
        state.todosList[action.payload].isDone = false;
      } else {
        state.todosList[action.payload].isDone = true;
      }
    },
  },
});

export const { addTodo, toggleIsDone } = todosSlise.actions;
export default todosSlise.reducer;
