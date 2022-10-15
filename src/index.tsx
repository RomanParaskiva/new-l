import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./hooks/auth.hook";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./App";
import { GridProvider } from "./hooks/grid.hook";
import "./output.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <Router>
      <AuthProvider>
        <GridProvider>
          <App />
        </GridProvider>
      </AuthProvider>
    </Router>
  </Provider>
);
