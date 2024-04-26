import { useState, Dispatch, SetStateAction } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { updateTodo } from "../actions/todoRequests";
import { TTodo } from "../types/todo";

type TCheckbox = {
  todo: TTodo;
  setIsUpdateLoading: Dispatch<SetStateAction<boolean>>;
  setFetchTodos: Dispatch<SetStateAction<boolean>>;
};

const Checkbox: React.FC<TCheckbox> = ({
  todo,
  setIsUpdateLoading,
  setFetchTodos,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
    setIsUpdateLoading(true);
    setFetchTodos(true);

    console.log(isChecked);
    updateTodo(todo._id, undefined, isChecked);
  };

  return (
    <div className="relative -left-20 transition-all group-hover:left-0">
      <input
        type="checkbox"
        id={todo._id}
        name={todo._id}
        className="hidden"
        checked={todo.completed}
        onChange={handleCheck}
      />
      <label htmlFor={todo._id} className="cursor-pointer transition">
        {todo.completed ? (
          <MdOutlineCheckCircleOutline size={24} />
        ) : (
          <MdOutlineRadioButtonUnchecked size={24} />
        )}
      </label>
    </div>
  );
};

export default Checkbox;
