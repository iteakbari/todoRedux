import React from "react";
import { useState } from "react";

import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../features/todo/todosSlice";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim().length === 0) {
      alert("Enter a task before adding !!");
      return;
    }

    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 1000),
        title: inputValue,
        completed: false,
      })
    );
    setInputValue("");
  };

    return (
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center mt-40"
      >
        <input
          type="text"
          className="outline-none bg-transparent border-b-2 border-solid border-[#58a4b0] w-[30%]"
          value={inputValue}
          placeholder="Enter to do"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#a9bcd0] mx-4 px-4 py-2 rounded-lg"
        >
          <BsPlus className="" />
        </button>
      </form>
    );
  
};

export default TodoForm;
