import { configureStore, Reducer} from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";

import { authMiddleware } from "./middlewares/authMiddleware";

const getPreloadedState = () => {
  let state;

  try {
    const value = localStorage.getItem("state");
    state = value ? JSON.parse(value) : value;
  } catch (e) {}

  return state;
};

export const store = configureStore({
  reducer: {
    auth: authSlice as unknown as Reducer,
  },
  preloadedState: getPreloadedState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
