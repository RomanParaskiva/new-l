import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Page } from "./components/Page/Page";
import { useAuth } from "./hooks/auth.hook";
import { LoginForm } from "./components/LoginForm/LoginForm";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { authed } = useAuth();

  if (!authed) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const App = () => {
  const { login, authed} = useAuth();

  useEffect(() => {
    const name = localStorage.getItem("userName");
    
    if(name) login(name);
  },[login, authed])


  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Page />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
};
