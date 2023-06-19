import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./TodoList.css";
import TodoItem from "../todo/todoItem";

const TodoList = () => {
  const {todos} = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // const changeHandler = (e) => {
  //   setUpdateTitle(e.target.value);
  // };

  // const submitHandler=(id ,title)=>{
  //    dispatch(editTodo({ id,title}))
                        
  // }

  return (
    <div className="mt-8">
      <ul className="">
        {todos.length > 0 ? (
          todos.map((todo) => {
             return (
                <TodoItem key={todo.id} {...todo} />
            );
          })
        ) : (
          <h1 className="text-center "> no todo...😥😥 </h1>
        )}
      </ul>
    </div>
  );
};

export default TodoList;

// style={{ textDecoration: todo.completed ? "line-through" : "" }}

// const handleDelete =(id)=>{
//   console.log(id)
//   dispatch(deleteTodo({id:id}))
// }
