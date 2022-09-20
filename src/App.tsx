import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Page } from "./components/Page/Page";
import { gridContext } from "./context/gridContext";
import { useGrid } from "./hooks/grid.hook";
import { useAuth } from "./hooks/auth.hook";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { AuthProvider } from "./hooks/auth.hook";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { authed } = useAuth();

  if (!authed) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const App = () => {
  const value = useGrid();

  return (
    <AuthProvider>
      <gridContext.Provider value={{ ...value }}>
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
      </gridContext.Provider>
    </AuthProvider>
  );
};
