import { useSelector } from "react-redux";
import { ALlRoutes } from "./Routes/AllRoutes";
import "./styles.css";

export default function App() {
  const isAuth = useSelector((state) => state.isAuth);
  const token = useSelector((state) => state.token);

  return (
    <div className="App">
      <h1>Token : {token}</h1>
      <h1>Auth Status : {`${isAuth}`}</h1>
      <ALlRoutes />
    </div>
  );
}
