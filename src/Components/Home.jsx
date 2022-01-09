import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Todo } from "./TodoComponents/Todo";

const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  console.log(isAuth);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Todo />
    </div>
  );
};

export { Home };
