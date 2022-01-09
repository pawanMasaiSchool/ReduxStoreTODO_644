import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginSuccess } from "../Redux/Auth/action";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const reqresLogin = () => {
    return axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      })
      .then((res) => res);
  };

  const handleLogin = async () => {
    const response = await reqresLogin();
    console.log(response.data.token);
    const loginAction = loginSuccess(response.data.token);
    dispatch(loginAction);
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ margin: "50px" }}>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export { Login };
