import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div>
      <h1>TODO list</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
