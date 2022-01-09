import { v4 as uuid } from "uuid";
import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

const addTodo = (task) => ({
  type: ADD_TODO,
  payload: { title: task, status: false, id: uuid() }
});
const deleteTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id: id
  }
});
export { addTodo, deleteTodo };
