import { configureStore } from "@reduxjs/toolkit";
import todosReduser from "./slices/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReduser,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
