import React ,{useState} from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {

  return (
    <>
      <TodoForm />
      <TodoList  />
    </>
  );
};

export default TodoApp;
