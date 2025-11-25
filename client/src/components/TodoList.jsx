import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, toggleTodo, deleteTodo } from "../features/todoSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul>
      {list.map((todo) => (
        <li key={todo._id}>
          <span 
            onClick={() => dispatch(toggleTodo(todo))}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo._id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
