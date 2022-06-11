import { configureStore } from "@reduxjs/toolkit";
import todosReduser from "../features/todos/todosSlice";

export default configureStore({
  reducer: {
    todos: todosReduser,
  },
});
