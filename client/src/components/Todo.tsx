
import { useState } from "react";
import DeleteButton from "./buttons/DeleteButton";
import Checkbox from "./Checkbox";
import { TodoProps } from "../types/todo";
import { updateTodo } from "../actions/todoRequests";
import EditButton from "./buttons/EditButton";

const Todo: React.FC<TodoProps> = ({
  todo,
  setFetchTodos,
  setIsDeleteLoading,
  isDeleteLoading,
  setIsUpdateLoading,
}) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleOnBlur = () => {
    if (newTitle === "") setNewTitle(todo.title);
    setIsEditClicked(false);
    updateTodo(todo._id, newTitle, undefined);
  };

  return (
    <div
      className={`group w-full overflow-x-hidden rounded-md border-2 border-black ${todo.completed ? "hover:shadow-zing-400/20 bg-zinc-400" : "bg-green-400 hover:shadow-green-400/20"} p-4 text-white transition hover:shadow-lg `}
    >
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center gap-2">
          {/* checkbox */}
          <Checkbox
            todo={todo}
            setIsUpdateLoading={setIsUpdateLoading}
            setFetchTodos={setFetchTodos}
          />
          {/* todo title */}
          <input
            className={`text-md relative -left-8 w-4/5 rounded-sm border-2 bg-transparent font-medium outline-none transition-all group-hover:left-0 ${todo.completed ? "line-through" : ""} ${isEditClicked ? "border-white pl-3" : "border-0 border-transparent pl-0"}`}
            value={newTitle}
            disabled={!isEditClicked}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleOnBlur}
          />
        </div>
        {/* buttons */}
        <div className="flex items-center gap-3">
          <EditButton setIsEditClicked={setIsEditClicked}/>
          <DeleteButton
            setFetchTodos={setFetchTodos}
            setIsDeleteLoading={setIsDeleteLoading}
            isDeleteLoading={isDeleteLoading}
            todoID={todo._id}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
