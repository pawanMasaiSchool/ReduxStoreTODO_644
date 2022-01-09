import { useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  console.log("todos", todos);
  return (
    <div style={{ margin: "20px" }}>
      <TodoInput />
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export { Todo };
