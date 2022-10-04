import { Middleware } from "@reduxjs/toolkit";

export const authMiddleware: Middleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    localStorage.setItem("userName", JSON.stringify(getState().user));
    return next(action);
  };