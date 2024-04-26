import axios from "axios";

const getAllTodos = async () => {
  return await axios
    .get("http://localhost:3001/api/v1/todos")
    .then((res) => res.data.todos)
    .catch((err) => console.log(err));
};

const addTodo = async (titleValue: string) => {
  return await axios.post("http://localhost:3001/api/v1/todos", {
    title: titleValue,
  });
};

const removeTodo = async (id: string) => {
  return await axios
    .delete(`http://localhost:3001/api/v1/todos/${id}`)
    .then((res) => res)
    .catch((err) => console.log(err));
};

const updateTodo = async (
  id: string,
  newTitle?: string,
  isCompleted?: boolean,
) => {
  return await axios
    .patch(`http://localhost:3001/api/v1/todos/${id}`, {
      title: newTitle,
      completed: isCompleted,
    })
    .then((res) => res)
    .catch((err) => console.log(err));
};

export { getAllTodos, addTodo, removeTodo, updateTodo };
