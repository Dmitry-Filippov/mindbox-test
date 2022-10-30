import { configureStore } from "@reduxjs/toolkit";
import todosReduser from "./slices/todosSlice";

export default configureStore({
  reducer: {
    todos: todosReduser,
  },
});
