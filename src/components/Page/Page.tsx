import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { Field } from "../Field/Field";
import { Sidebar } from "../Sidebar/Sidebar";
import { LoginForm } from "../LoginForm/LoginForm";

import "./page.css";
import { authContext } from "../../context/authContext";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { authed } = useContext(authContext);

  return authed === true ? children : <Navigate to="/login" replace />;
}

export const Page: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <section className="h-full flex gap-5">
                <Sidebar />
                <Field />
              </section>
            </RequireAuth>
          }
        />

        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
};
