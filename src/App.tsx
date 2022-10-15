import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Page } from "./components/Page/Page";
import { login } from "./store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux.hook";
import { LoginForm } from "./components/LoginForm/LoginForm";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return children;
};

export const App = () => {
  const { authed } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const name = localStorage.getItem("userName");

    if (name && !authed) dispatch(login(name));
  }, [authed, dispatch]);

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
