import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todo/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
