import { configureStore, Reducer} from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";

import { authMiddleware } from "./middlewares/authMiddleware";

const getPreloadedState = () => {
  let state;

  try {
    state = JSON.parse(localStorage.getItem("state") as string);
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
