import { FcTodoList } from "react-icons/fc";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import { getAllTodos } from "../actions/todoRequests";
import { TTodo } from "../types/todo";
import Spinner from "./Spinner";


const TodoContainer = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [fetchTodos, setFetchTodos] = useState(false);
  const [isAddLoading, setIsAddLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //Fetch todos in start
  useEffect(() => {
    getAllTodos().then((res) => setTodos(res));
    setFetchTodos(false);
  }, []);

  //Fetch totos with Add | Delete | Edit action
  useEffect(() => {
    getAllTodos().then((res) => {
      setTodos(res);
      setIsLoading(false);
      setIsAddLoading(false);
      setIsDeleteLoading(false);
      setIsUpdateLoading(false);
    });
  }, [
    fetchTodos,
    setFetchTodos,
    isAddLoading,
    isDeleteLoading,
    isUpdateLoading,
  ]);

  return (
    <div className="w-full max-w-[450px]">
      {/* title */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-3xl font-medium">Todo</h1>
        <FcTodoList size={28} />
      </div>
      <div className="flex flex-col gap-7">
        {/* add todo form */}
        <AddTodoForm
          isAddLoading={isAddLoading}
          setIsAddLoading={setIsAddLoading}
          setFetchTodos={setFetchTodos}
        />
        {/* todos */}
        <div className="flex flex-col items-center gap-4">
          {isLoading ? (
            <Spinner size={54} style="text-blue-500" />
          ) : (
            todos.map((item) => (
              <Todo
                todo={item}
                key={item._id}
                setFetchTodos={setFetchTodos}
                isDeleteLoading={isDeleteLoading}
                setIsDeleteLoading={setIsDeleteLoading}
                setIsUpdateLoading={setIsUpdateLoading}
              />
            ))
          )}
          {!isLoading && todos.length <= 0 && (
            <div className="w-full border-2 border-black rounded-md p-4">Your list is empty!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
