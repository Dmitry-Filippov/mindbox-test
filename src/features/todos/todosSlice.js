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
    editName: (state, action) => {
      state.todosList[action.payload[0]].name =action.payload[1]
    }
  },
});

export const { addTodo, toggleIsDone, editName } = todosSlise.actions;
export default todosSlise.reducer;
