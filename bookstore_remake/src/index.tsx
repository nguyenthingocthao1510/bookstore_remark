import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import SWRConfigProvider from "./context/SWRConfigProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <SWRConfigProvider>
      <App />
    </SWRConfigProvider>
  </Provider>
);
