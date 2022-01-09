import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { myStore } from "./Redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
