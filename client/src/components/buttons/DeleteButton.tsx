import React, { Dispatch, SetStateAction, useState } from "react";
import Spinner from "../Spinner";
import { FaRegTrashCan } from "react-icons/fa6";
import { removeTodo } from "../../actions/todoRequests";

type TDeleteButton = {
  todoID: string;
  setFetchTodos: Dispatch<SetStateAction<boolean>>;
  setIsDeleteLoading: Dispatch<SetStateAction<boolean>>;
  isDeleteLoading: boolean;
};

const DeleteButton: React.FC<TDeleteButton> = ({
  isDeleteLoading,
  todoID,
  setIsDeleteLoading,
  setFetchTodos,
}) => {
  const [clickedItem, setClickedItem] = useState("");

  const removeTodoHandler = async () => {
    try {
      // Send a DELETE request to remove todo from database
      removeTodo(todoID);
      // Update the state
      setFetchTodos(true);
      setIsDeleteLoading(true);
      setClickedItem(todoID);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <button onClick={removeTodoHandler}>
      {isDeleteLoading && clickedItem === todoID ? (
        <Spinner />
      ) : (
        <FaRegTrashCan className="pointer-events-none" />
      )}
    </button>
  );
};

export default DeleteButton;
