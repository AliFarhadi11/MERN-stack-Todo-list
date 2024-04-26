import createCustomError from "../errors/custom-error.js";
import Todo from "../models/Todo.js";

//Getting all todos from Database
const getAllTodos = async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).json({ todos });
};

//Create a Todo and save it to Database
const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({ todo });
};

//Delete a Todo with provided ID
const deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  const todo = await Todo.findOneAndDelete({ _id: id });
  if (!todo) {
    return next(createCustomError(`No Todo with id : ${id}`, 404));
  }

  res.status(200).json({ todo });
};

//Update a Todo with provided ID
const updateTodo = async (req, res, next) => {
  const { id } = req.params;

  const todo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    return next(createCustomError(`No todo with id : ${id}`, 404));
  }

  res.status(200).json({ todo });
};

export { getAllTodos, createTodo, deleteTodo, updateTodo };
