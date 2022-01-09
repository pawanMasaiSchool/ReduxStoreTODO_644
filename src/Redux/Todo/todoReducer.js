import { loadData, saveData } from "../../utils/localStorage";
import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

const initiState = {
  todos: loadData("todos") || []
};

const todoReducer = (currentState = initiState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const updatedTodo = [
        ...currentState.todos,
        {
          title: payload.title,
          status: payload.status,
          id: payload.id
        }
      ];
      saveData("todos", updatedTodo);
      return {
        // ...currentState,
        todos: [
          ...currentState.todos,
          {
            title: payload.title,
            status: payload.status,
            id: payload.id
          }
        ]
      };
    }
    case REMOVE_TODO: {
      const updatedTodo = [
        ...currentState.todos.filter((item) => item.id !== payload.id)
      ];
      saveData("todos", updatedTodo);
      return {
        todos: [...currentState.todos.filter((item) => item.id !== payload.id)]
      };
    }
    default: {
      return currentState;
    }
  }
};

export { todoReducer };
