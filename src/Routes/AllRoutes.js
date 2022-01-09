import { Route, Switch } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Navbar } from "../Components/Navbar";

const ALlRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export { ALlRoutes };
