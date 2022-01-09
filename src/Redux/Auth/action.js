import { LOGIN_SUCCESS } from "./actionTypes";

const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token
    }
  };
};
const loginFailure = () => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: ""
    }
  };
};

export { loginSuccess, loginFailure };
