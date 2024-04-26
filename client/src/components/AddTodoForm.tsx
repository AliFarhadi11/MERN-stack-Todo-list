import { useState } from "react";
import { addTodo } from "../actions/todoRequests";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const AddTodoForm = ({ setFetchTodos, isAddLoading, setIsAddLoading }: any) => {
  const [titleValue, setTitleValue] = useState("");

  const addTodoHandler = async (e: any) => {
    e.preventDefault();
    try {
      if (!titleValue) {
        toast.error("Please provide a title");
        return;
      } else if (titleValue.length > 40) {
        toast.error("Title must be less than 40 characters");
        return;
      }
      // Send a POST request to add the new item to the database
      addTodo(titleValue);

      setFetchTodos(true);
      setIsAddLoading(true);
      // Clear the input field
      setTitleValue("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <>
      <div className="mt-12">
        <form
          className="flex w-full items-center justify-center gap-4 rounded-md border-2 border-black bg-blue-500 p-4"
          onSubmit={addTodoHandler}
        >
          <input
            type="text"
            placeholder="Add your Todo here..."
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            className="h-full w-full bg-transparent text-white outline-none placeholder:text-white"
          />
          <button
            type="button"
            disabled={isAddLoading}
            onClick={addTodoHandler}
            className="relative z-10 flex h-full w-1/5 items-center justify-center text-lg text-white"
          >
            {isAddLoading ? <Spinner size={24} /> : "Add"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodoForm;
