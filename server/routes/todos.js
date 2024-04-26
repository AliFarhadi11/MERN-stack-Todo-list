import express from "express";
const router = express.Router();

import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todos.js";

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").delete(deleteTodo).patch(updateTodo);

export default router;
