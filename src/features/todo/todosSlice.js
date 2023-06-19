import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: false },
    { id: 4, title: "todo4", completed: true },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // const newtodo = {
      //   id: Math.floor(Math.random() * 1000),
      //   title: action.payload.title,
      //   completed: false,
      // };

      // state.todos.push(newtodo);

      state.todos.push(action.payload);
      return state;
    },

    deleteTodo: (state, action) => {
      const filterTodos = state.todos.filter((i) => i.id !== action.payload.id);
      state.todos = filterTodos;
    },

    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find((i) => i.id === action.payload.id);
      selectedTodo.completed = !selectedTodo.completed;
    },

    editTodo: (state, action) => {
      const selectedTodo = state.todos.find((i) => i.id === action.payload.id);
      selectedTodo.title = action.payload.title;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
