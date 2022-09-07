import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
      <Provider template={AlertTemplate} {...options}>
        <App />
      </Provider>
    </Router>
);
