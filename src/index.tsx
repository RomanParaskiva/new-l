import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./hooks/auth.hook";
import { App } from "./App";
import "./output.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);
