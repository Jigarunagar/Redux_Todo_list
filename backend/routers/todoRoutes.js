import express from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todoController.js";

const todoRoutes = express.Router();

todoRoutes.get("/", getTodos);
todoRoutes.post("/", addTodo);
todoRoutes.put("/:id", updateTodo);
todoRoutes.delete("/:id", deleteTodo);

export default todoRoutes;
