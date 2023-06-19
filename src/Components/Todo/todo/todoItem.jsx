import { FaTimes } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "./../../../features/todo/todosSlice";
import { useState } from "react";

const TodoItem = ({ id, title, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({
    id:'',title:''
  });
  const dispatch = useDispatch();

  const editHandler = (id,title) => {
    setIsEditing(true);
    setUpdateTodo({...updateTodo,id,title})
  }

  const submitHandler = (e) => {
   e.preventDefault();

    dispatch(
      editTodo({
        id,
        title:updateTodo,
      })
    );
    setIsEditing(false); 
  }
  
  return (
    <li
      className={`todo flex  items-center justify-between w-[25%]  mx-auto my-2 p-2 bg-white rounded-lg
                            ${completed ? "passive" : "active"}`}
    >
      {completed ? <s>{title}</s> : <span>{title}</span>}

      <div className="flex justify-center">
        <button
          className="text-xl text-red-700 isEditing"
          onClick={() =>
            dispatch(deleteTodo({ id }))
          }
        >
          <FaTimes />
        </button>

        <button
          className="px-3 text-xl text-green-700"
          onClick={(e) => dispatch(toggleTodo({ id }))}
        >
          <TiTick />
        </button>
        <button
          className="text-xl text-yellow-600"
          onClick={(id) => {editHandler(id,title) }}
        >
          <AiFillEdit />
        </button>
      </div>

      {/* edit */}
      {isEditing && (
        <>
          <input
            type="text"
            className="bg-transparent outline-none "
            onChange={(e) => setUpdateTodo(e.target.value)}
            value={updateTodo.title}
          />

        <button className="text-xl text-yellow-600"
          onClick={submitHandler}
        >
            update
          </button>
        </>
       )}
    </li>
  );
};

export default TodoItem;
