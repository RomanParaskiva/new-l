import React from "react";
// import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { App } from "./App";
import "./output.css";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Router >
    <App />
  </Router>
);
