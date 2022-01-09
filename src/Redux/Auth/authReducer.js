import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  isAuth: loadData("isAuth") || false,
  token: loadData("token") || ""
};

export const authReducer = (currentState = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      saveData("token", payload.token);
      saveData("isAuth", true);
      return {
        ...currentState,
        isAuth: true,
        token: payload.token
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...currentState,
        isAuth: false,
        token: ""
      };
    }

    default: {
      return currentState;
    }
  }
};
